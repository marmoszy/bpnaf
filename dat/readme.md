## BPNAF dat dir
The directory contains example BPNAF data files. They have extension tsv and contains tab separtated files according to following specification

#### First line (configuration data):
1 - magic character ('#'); 
2 - company name; 
3 - evaluator name; 
4 - data, hour:min:sec
5 - preview('0')/edit('2')  
6 - empty
7 - empty
8-11 - weights
13 - empty
14 - country code
15 - industry 
16 - company size
17 - empty
18 - empty
19 - general recommendations

#### Other lines (process data):
1 - N-1 level code
2 - N level name
3 - N-1 level name
4 - trend weight
5 - weight trend
6 - structured value
7 - total knowledge intensity value
8-17 - knowledge intensity values
18 - recommendation area
19 - recommendation
