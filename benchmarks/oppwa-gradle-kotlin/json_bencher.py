# /// jbang
# requires-jython = "2.7.4"
# runtime-options = [
#   "-Dpython.console.encoding=UTF-8"
# ]
# ///

import json
from collections import OrderedDict

filename = "app/build/reports/tulip/oppwa_report.json"
fileObj = open(filename)
jb = json.load(fileObj, object_pairs_hook=OrderedDict)

dict = {}
dict["Constant TPS"] = "b900da0f-0f01-4658-a558-5e858f831813"
print "{"
print '  "%s": {'%(dict["Constant TPS"])
print '    "latency": {'
print '      "value": %.1f,'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["avg_rt"])
print '      "lower_value": %.1f,'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["min_rt"])
print '      "upper_value": %.1f'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["max_rt"])
print '    },'
print '    "throughput": {'
print '      "value": %.1f'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["avg_aps"])
print '      "lower_value": %.1f,'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["min_aps"])
print '      "upper_value": %.1f'%(jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["max_aps"])
print '    }'
print '  }'
print "}"
