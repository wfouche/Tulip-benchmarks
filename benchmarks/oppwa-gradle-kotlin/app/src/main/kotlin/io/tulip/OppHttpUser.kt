package io.tulip

/*-------------------------------------------------------------------------*/

import io.github.wfouche.tulip.user.HttpUser

import kotlinx.serialization.*
import kotlinx.serialization.json.*
import org.springframework.web.client.RestClientException

import org.slf4j.Logger
import org.slf4j.LoggerFactory

/*-------------------------------------------------------------------------*/

// https://transform.tools/json-to-kotlin

@Serializable
data class AuthResponse(
    val id: String,
    val paymentType: String,
    val paymentBrand: String,
    val amount: String,
    val currency: String,
    val descriptor: String,
    val result: Result,
    val resultDetails: ResultDetails,
    val card: Card,
    val risk: Risk,
    val buildNumber: String,
    val timestamp: String,
    val ndc: String,
    val source: String,
    val paymentMethod: String,
    val shortId: String
)

@Serializable
data class Result(
    val code: String,
    val description: String
)

@Serializable
data class ResultDetails(
    val clearingInstituteName: String
)

@Serializable
data class Card(
    val bin: String,
    val last4Digits: String,
    val holder: String,
    val expiryMonth: String,
    val expiryYear: String
)

@Serializable
data class Risk(
    val score: String
)

@Serializable
data class CompResponse(
    val id: String,
    val referencedId: String,
    val paymentType: String,
    val amount: String,
    val currency: String,
    val descriptor: String,
    val result: Result,
    val resultDetails: ResultDetails,
    val buildNumber: String,
    val timestamp: String,
    val ndc: String,
    val source: String,
    val paymentMethod: String,
    val shortId: String
)

/*-------------------------------------------------------------------------*/

class OppHttpUser(userId: Int, threadId: Int) : HttpUser(userId, threadId) {

    // ----------------------------------------------------------------- //

    private var paymentId: String = ""

    // ----------------------------------------------------------------- //

    override fun onStart(): Boolean {
        if (userId == 0) {
            super.onStart()
            token = getUserParamValue("token")
        }
        return true
    }

    // ----------------------------------------------------------------- //
    // https://docs.oppwa.com/integrations/server-to-server#syncPayment

    // Action 1 - Auth
    override fun action1(): Boolean {
        paymentId = ""
        val map = mapOf(
            "entityId" to "8a8294174b7ecb28014b9699220015ca",
            "amount" to "92.00",
            "currency" to "EUR",
            "paymentBrand" to "VISA",
            "paymentType" to "PA",
            "card.number" to "4200000000000000",
            "card.holder" to "Jane Jones",
            "card.expiryMonth" to "05",
            "card.expiryYear" to "2034",
            "card.cvv" to "123"
        )
        val reqBodyText: String = map.entries.joinToString("&")
        val rspBodyText: String? = restClient().post()
            .uri("/v1/payments")
            .header("Authorization", "Bearer " + token)
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(reqBodyText)
            .retrieve()
            .body(String::class.java)
        if (rspBodyText != null) {
            val rsp = Json.decodeFromString<AuthResponse>(rspBodyText!!)
            if (rsp.result.code.split(".")[0] == "000") {
                paymentId = rsp.id
                return true
            }
        }
        return false
    }

    // ----------------------------------------------------------------- //

    // Action 2 - Auth Completion
    override fun action2(): Boolean {
        if (paymentId.isEmpty()) {
            return false
        }
        val map = mapOf(
            "entityId" to "8a8294174b7ecb28014b9699220015ca",
            "amount" to "92.00",
            "currency" to "EUR",
            "paymentType" to "CP"
        )
        val reqBodyText: String = map.entries.joinToString("&")
        val rspBodyText: String? = restClient().post()
            .uri("/v1/payments/${paymentId}")
            .header("Authorization", "Bearer " + token)
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(reqBodyText)
            .retrieve()
            .body(String::class.java)
        if (rspBodyText != null) {
            val rsp = Json.decodeFromString<CompResponse>(rspBodyText!!)
            if (rsp.result.code.split(".")[0] == "000") {
                return true
            }
        }
        return false
    }

    // ----------------------------------------------------------------- //

    // Action 3 - Debit
    override fun action3(): Boolean {
        paymentId = ""
        val map = mapOf(
            "entityId" to "8a8294174b7ecb28014b9699220015ca",
            "amount" to "92.00",
            "currency" to "EUR",
            "paymentBrand" to "VISA",
            "paymentType" to "DB",
            "card.number" to "4200000000000000",
            "card.holder" to "Jane Jones",
            "card.expiryMonth" to "05",
            "card.expiryYear" to "2034",
            "card.cvv" to "123"
        )
        val reqBodyText: String = map.entries.joinToString("&")
        val rspBodyText: String? = restClient().post()
            .uri("/v1/payments")
            .header("Authorization", "Bearer " + token)
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(reqBodyText)
            .retrieve()
            .body(String::class.java)
        if (rspBodyText != null) {
            val rsp = Json.decodeFromString<AuthResponse>(rspBodyText!!)
            if (rsp.result.code.split(".")[0] == "000") {
                paymentId = rsp.id
                return true
            }
        }
        return false
    }

    // ----------------------------------------------------------------- //

    // Action 4 - Refund
    override fun action4(): Boolean {
        if (paymentId.isEmpty()) {
            return false
        }
        val map = mapOf(
            "entityId" to "8a8294174b7ecb28014b9699220015ca",
            "amount" to "92.00",
            "currency" to "EUR",
            "paymentType" to "RF"
        )
        val reqBodyText: String = map.entries.joinToString("&")
        val rspBodyText: String? = restClient().post()
            .uri("/v1/payments/${paymentId}")
            .header("Authorization", "Bearer " + token)
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(reqBodyText)
            .retrieve()
            .body(String::class.java)
        if (rspBodyText != null) {
            val rsp = Json.decodeFromString<CompResponse>(rspBodyText!!)
            if (rsp.result.code.split(".")[0] == "000") {
                return true
            }
        }
        return false
    }

    // ----------------------------------------------------------------- //

    override fun onStop(): Boolean {
        return true
    }

    // ----------------------------------------------------------------- //

    override fun logger(): Logger {
        return logger
    }

    // ----------------------------------------------------------------- //

    companion object {
        private val logger: Logger = LoggerFactory.getLogger(OppHttpUser::class.java)
        private var token: String = ""
    }

}

/*-------------------------------------------------------------------------*/
