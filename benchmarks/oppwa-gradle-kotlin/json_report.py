import json
from collections import OrderedDict

filename = "app/build/reports/tulip/oppwa_report.json"
fileObj = open(filename)
jb = json.load(fileObj, object_pairs_hook=OrderedDict)

print jb["benchmarks"]["Constant TPS"]["actions"]["summary"]["aps"]
