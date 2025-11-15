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

keys = jb["benchmarks"].keys()
num_benchmarks = 0
print("{")
for name in keys:
    num_benchmarks += 1
    print('  "%s": {'%(name))
    print('    "latency": {')
    print('      "value": %d,'%(jb["benchmarks"][name]["actions"]["summary"]["avg_rt"]*1000000))
    print('      "lower_value": %d,'%(jb["benchmarks"][name]["actions"]["summary"]["min_rt"]*1000000))
    print('      "upper_value": %d'%(jb["benchmarks"][name]["actions"]["summary"]["max_rt"]*1000000))
    print("    },")
    print('    "throughput": {')
    print('      "value": %f'%(jb["benchmarks"][name]["actions"]["summary"]["aps"]))
    print("    }")
    if num_benchmarks == len(keys):
        print("  }")
    else:
        print("  },")
print("}")
