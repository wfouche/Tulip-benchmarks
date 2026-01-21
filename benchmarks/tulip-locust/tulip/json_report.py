import json
from collections import OrderedDict

filename = "benchmark_report.json"
fileObj = open(filename)
jb = json.load(fileObj, object_pairs_hook=OrderedDict)

def report(name):
    print name
    print "  ", jb["benchmarks"][name]["actions"]["summary"]["aps"], "aps"
    print "  ", jb["benchmarks"][name]["actions"]["summary"]["aps_target_rate"], "aps_target_rate"

report("REST1")
report("REST2")
report("REST3")
report("REST3.max")
