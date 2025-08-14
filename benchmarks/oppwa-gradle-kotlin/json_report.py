import json
from collections import OrderedDict

filename = "app/build/reports/tulip/oppwa_report.json"
fileObj = open(filename)
jb = json.load(fileObj, object_pairs_hook=OrderedDict)

print "Constant TPS"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["aps"], "aps"
print "  ", jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["aps_target_rate"], "aps_target_rate"
print "Rising TPS"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["aps"],"aps"
print "  ", jb["benchmarks"]["Rising TPS"]["actions"]["summary"]["aps_target_rate"], "aps_target_rate"
