# /// jbang
# requires-jython = "2.7.4"
# runtime-options = [
#   "-Dpython.console.encoding=UTF-8"
# ]
# ///

import json
from collections import OrderedDict

filename = "oppwa_report.json"
fileObj = open(filename)
jb = json.load(fileObj, object_pairs_hook=OrderedDict)

print "Constant TPS"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["aps"], "aps"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["aps_target_rate"], "aps_target_rate"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["avg_rt"], "avg_rt"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["min_rt"], "min_rt"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["max_rt"], "max_rt"
print "Rising TPS"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["aps"],"aps"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["aps_target_rate"], "aps_target_rate"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["avg_rt"], "avg_rt"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["min_rt"], "min_rt"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["max_rt"], "max_rt"