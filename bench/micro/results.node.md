* runtime: node 27.0.0-alpha.0.0.0 (x64-linux)
## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`365.27ps ± 9.11ps`|`678.96ps`|`285.16ps - 22.71ns`|## string
### filter

#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`33.29ns ± 447.47ps`|`54.05ns`|`20.9ns - 54.47ns`|
|regex|`524288`|`111.21ns ± 2.16ns`|`153.5ns`|`70.11ns - 290.3ns`|
|fp|`524288`|`231ns ± 4.51ns`|`373.33ns`|`164.1ns - 382.55ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`166.07ns ± 2.69ns`|`241.92ns`|`103.5ns - 251.31ns`|
|fp & procedural filter|`524288`|`351.96ns ± 6.49ns`|`505.31ns`|`239.11ns - 510.47ns`|
|fp|`524288`|`510.04ns ± 14.88ns`|`1.01μs`|`313.57ns - 1.05μs`|## object
### access

#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`4.56ns ± 620.38ps`|`28.08ns`|`1.6ns - 34.44ns`|
|polymorphic array|`524288`|`4.75ns ± 537.13ps`|`32.56ns`|`2.12ns - 32.57ns`|
|polymorphic object|`524288`|`7.5ns ± 739.3ps`|`27.74ns`|`2.66ns - 34.31ns`|
|monomorphic array|`524288`|`8.94ns ± 854.57ps`|`29.43ns`|`1.94ns - 29.74ns`|
|megamorphic object|`524288`|`20.05ns ± 475.92ps`|`45.35ns`|`16.65ns - 49.32ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`6.33ns ± 444.44ps`|`25.13ns`|`3.95ns - 30.47ns`|
|monomorphic object|`524288`|`9.86ns ± 446.9ps`|`31.19ns`|`6.95ns - 37.33ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.88ns ± 218.98ps`|`22.07ns`|`7.23ns - 29.51ns`|
|prototype chain (override prototype)|`524288`|`9.51ns ± 195.36ps`|`16.85ns`|`8.34ns - 29.94ns`|
|prototype chain (create with prototype)|`524288`|`10.09ns ± 200.67ps`|`18.46ns`|`6.74ns - 28.05ns`|
|WeakMap store|`524288`|`13.4ns ± 403.16ps`|`25.08ns`|`6.23ns - 31.65ns`|### init

#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`138.51ns ± 1.26ns`|`195.73ns`|`110.75ns - 205.77ns`|
|Object.create(null)|`524288`|`252.42ns ± 3.22ns`|`342ns`|`207.98ns - 342.07ns`|
|object literal (computed properties)|`524288`|`811.22ns ± 5.62ns`|`977.48ns`|`740.33ns - 1.14μs`|
|function constructor (freezed proto)|`524288`|`847.74ns ± 6.5ns`|`1.09μs`|`749.91ns - 1.14μs`|
|object literal|`524288`|`851.31ns ± 5.52ns`|`998.72ns`|`760.28ns - 1.01μs`|
|function constructor|`524288`|`854.27ns ± 5.83ns`|`977.24ns`|`756.93ns - 999.09ns`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`9.3ns ± 1.31ns`|`108.34ns`|`2.38ns - 112.03ns`|
|Object.create()|`524288`|`11.42ns ± 1.53ns`|`111.44ns`|`2.25ns - 133.33ns`|
|set prototype|`524288`|`21.23ns ± 2.07ns`|`121.87ns`|`3.21ns - 138.18ns`|
|constructor|`524288`|`42.32ns ± 3.3ns`|`162.42ns`|`2.76ns - 165.53ns`|
|object spread|`524288`|`87.85ns ± 1.18ns`|`137.83ns`|`63.73ns - 145.12ns`|
|Object.setPrototypeOf()|`524288`|`180.75ns ± 3.03ns`|`340.06ns`|`151.17ns - 346.29ns`|
|set __proto__|`524288`|`242.74ns ± 4.89ns`|`415.85ns`|`192.63ns - 455.84ns`|## array
### unique items
#### size 8
##### 1 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`58.75ns ± 497.43ps`|`81.94ns`|`38.41ns - 86.16ns`|
|Set|`1048576`|`143.49ns ± 982.25ps`|`199.53ns`|`117.52ns - 212.33ns`|
|Set direct assign|`1048576`|`147.62ns ± 895.27ps`|`217.11ns`|`100.75ns - 236.03ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`60.7ns ± 506.59ps`|`82.25ns`|`46.6ns - 87.27ns`|
|Set|`1048576`|`86.13ns ± 472.54ps`|`107ns`|`68.62ns - 114.89ns`|
|Set direct assign|`1048576`|`95.81ns ± 466.16ps`|`119.65ns`|`81.26ns - 126.92ns`|##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`114.09ns ± 584.01ps`|`144.01ns`|`86.82ns - 164.5ns`|
|Set direct assign|`1048576`|`160.2ns ± 883.62ps`|`207.78ns`|`139.08ns - 242.27ns`|
|Set|`1048576`|`174.5ns ± 1.84ns`|`236.24ns`|`129.92ns - 252ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`91.96ns ± 530.5ps`|`115.08ns`|`52.65ns - 130.12ns`|
|Set direct assign|`1048576`|`100.5ns ± 487.13ps`|`122.41ns`|`85.62ns - 149.74ns`|
|Array.includes()|`1048576`|`113.11ns ± 627.34ps`|`155.05ns`|`99.58ns - 162.17ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`122.37ns ± 789.07ps`|`154.26ns`|`97.81ns - 163.88ns`|
|Set|`1048576`|`191.53ns ± 2.14ns`|`283.98ns`|`154.08ns - 307.7ns`|
|Set direct assign|`1048576`|`213.26ns ± 2.59ns`|`311.67ns`|`155.3ns - 327.78ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`97.46ns ± 521.72ps`|`131.02ns`|`78.17ns - 134.81ns`|
|Set direct assign|`1048576`|`110.09ns ± 772.61ps`|`150.8ns`|`78.01ns - 153.41ns`|
|Array.includes()|`1048576`|`202.25ns ± 2.14ns`|`290.96ns`|`160.48ns - 325.46ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`275.69ns ± 2.79ns`|`374.94ns`|`224.84ns - 383.88ns`|
|Set|`1048576`|`310.8ns ± 4.48ns`|`489.59ns`|`226.13ns - 679.26ns`|
|Array.includes()|`1048576`|`327.46ns ± 2.17ns`|`509.26ns`|`283.37ns - 554.09ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`120.44ns ± 749.5ps`|`159.16ns`|`102.66ns - 172.7ns`|
|Set|`1048576`|`156.22ns ± 1.61ns`|`234.3ns`|`117.58ns - 278.01ns`|
|Array.includes()|`1048576`|`344.8ns ± 3.93ns`|`580.83ns`|`284.28ns - 601.34ns`|#### size 16
##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`197.37ns ± 2ns`|`311.43ns`|`176.44ns - 336.78ns`|
|Set|`524288`|`198.98ns ± 1.79ns`|`302.14ns`|`173.38ns - 306.31ns`|
|Array.includes()|`524288`|`225.25ns ± 4.25ns`|`322.09ns`|`155.86ns - 325.67ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`129.05ns ± 1.33ns`|`169.69ns`|`107.17ns - 171.46ns`|
|Set direct assign|`524288`|`162.75ns ± 2.05ns`|`235.27ns`|`128.98ns - 239.75ns`|
|Array.includes()|`524288`|`207.42ns ± 3.42ns`|`305.77ns`|`162.34ns - 309.2ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`186.33ns ± 1.12ns`|`223.2ns`|`160.4ns - 230.61ns`|
|Set|`524288`|`217.25ns ± 1.42ns`|`245.93ns`|`191.78ns - 312.33ns`|
|Set direct assign|`524288`|`224.87ns ± 1.61ns`|`266.93ns`|`199.96ns - 341.28ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`134.9ns ± 1.44ns`|`193.84ns`|`89.16ns - 216.57ns`|
|Set direct assign|`524288`|`146.29ns ± 1.09ns`|`184.66ns`|`129.16ns - 218.47ns`|
|Array.includes()|`524288`|`436.31ns ± 8.18ns`|`658ns`|`346.98ns - 678.84ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`304.18ns ± 2.27ns`|`443.91ns`|`267.38ns - 481.43ns`|
|Set direct assign|`524288`|`328.91ns ± 4.02ns`|`414.9ns`|`272.68ns - 419.01ns`|
|Array.includes()|`524288`|`760.48ns ± 9.96ns`|`1.04μs`|`646.08ns - 1.05μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`188.86ns ± 2ns`|`302.83ns`|`147.04ns - 334.68ns`|
|Set direct assign|`524288`|`196.75ns ± 2.21ns`|`255.68ns`|`148.97ns - 266.49ns`|
|Array.includes()|`524288`|`793.83ns ± 11.69ns`|`1.08μs`|`648.26ns - 1.08μs`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`360.2ns ± 3.78ns`|`547.7ns`|`316.21ns - 549.58ns`|
|Set direct assign|`524288`|`516.38ns ± 4.12ns`|`628.14ns`|`452.04ns - 671.2ns`|
|Set|`524288`|`602.71ns ± 7.39ns`|`809.61ns`|`472.51ns - 827.14ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`275.7ns ± 2.83ns`|`422.01ns`|`216.85ns - 426.5ns`|
|Set direct assign|`524288`|`285.29ns ± 3.35ns`|`374.58ns`|`234.08ns - 390.06ns`|
|Array.includes()|`524288`|`716.01ns ± 11.48ns`|`1.11μs`|`609.97ns - 1.24μs`|#### size 64
##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`590.09ns ± 13.57ns`|`952.85ns`|`530.17ns - 952.85ns`|
|Set|`131072`|`616.96ns ± 16.92ns`|`861.7ns`|`529.03ns - 861.7ns`|
|Array.includes()|`131072`|`2.64μs ± 28.38ns`|`2.98μs`|`2.45μs - 2.98μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`473.88ns ± 12.67ns`|`637.71ns`|`413.37ns - 637.71ns`|
|Set direct assign|`131072`|`494.06ns ± 8.42ns`|`627.1ns`|`432.61ns - 627.1ns`|
|Array.includes()|`131072`|`2.79μs ± 42.47ns`|`3.36μs`|`2.45μs - 3.36μs`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`803.27ns ± 16.47ns`|`1.06μs`|`713.97ns - 1.06μs`|
|Set direct assign|`131072`|`823.28ns ± 9.28ns`|`937.68ns`|`742.27ns - 937.68ns`|
|Array.includes()|`131072`|`2.94μs ± 36.24ns`|`3.49μs`|`2.72μs - 3.49μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`552.47ns ± 11.81ns`|`719.2ns`|`494.11ns - 719.2ns`|
|Set direct assign|`131072`|`557ns ± 7.47ns`|`653.93ns`|`501.47ns - 653.93ns`|
|Array.includes()|`131072`|`2.94μs ± 29.64ns`|`3.35μs`|`2.74μs - 3.35μs`|##### 32 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.13μs ± 12.7ns`|`1.29μs`|`1.02μs - 1.29μs`|
|Set|`131072`|`1.16μs ± 21.67ns`|`1.39μs`|`1.01μs - 1.39μs`|
|Array.includes()|`131072`|`2.53μs ± 34.48ns`|`3.26μs`|`2.32μs - 3.26μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`713.87ns ± 10.31ns`|`896.13ns`|`643.54ns - 896.13ns`|
|Set|`131072`|`742.86ns ± 11.67ns`|`881.97ns`|`653.04ns - 881.97ns`|
|Array.includes()|`131072`|`4.1μs ± 33.35ns`|`4.46μs`|`3.8μs - 4.46μs`|##### 64 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.9μs ± 18.85ns`|`2.14μs`|`1.77μs - 2.14μs`|
|Set direct assign|`131072`|`1.93μs ± 15.11ns`|`2.1μs`|`1.81μs - 2.1μs`|
|Array.includes()|`131072`|`5.5μs ± 37.53ns`|`5.88μs`|`5.17μs - 5.88μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`962.5ns ± 10.14ns`|`1.11μs`|`884.24ns - 1.11μs`|
|Set|`131072`|`1.04μs ± 17.14ns`|`1.23μs`|`915.67ns - 1.23μs`|
|Array.includes()|`131072`|`12.22μs ± 57.47ns`|`13μs`|`11.76μs - 13μs`|## coroutine

### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`124.53ns ± 804.28ps`|`146.65ns`|`103.74ns - 150.69ns`|
|await non-promise|`524288`|`127.2ns ± 841.63ps`|`158.82ns`|`113.05ns - 160.31ns`|
|generator|`524288`|`147.14ns ± 1.33ns`|`197.32ns`|`125.16ns - 201.22ns`|
|async generator|`524288`|`526.59ns ± 11.28ns`|`1.24μs`|`399.06ns - 1.26μs`|### async iterable

#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`907.55ns ± 22.48ns`|`1.25μs`|`746.18ns - 1.25μs`|
|generator|`131072`|`1.65μs ± 43.04ns`|`2.95μs`|`1.5μs - 2.95μs`|## lru
### capacity 8

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`166.31ns ± 2.24ns`|`236.55ns`|`118.72ns - 267.98ns`|`166.31ns ± 77.2ns`|`1.17μs`|`922.18ns - 1.21μs`|
|map|`524288`|`201.51ns ± 2.32ns`|`265.42ns`|`162.6ns - 274.39ns`|`201.51ns ± 74.78ns`|`1.26μs`|`942.16ns - 1.51μs`|
|linked list map|`524288`|`224.95ns ± 2.4ns`|`351.19ns`|`193.65ns - 351.77ns`|`224.95ns ± 74.69ns`|`1.43μs`|`962.26ns - 1.5μs`|
|two object buckets|`524288`|`258.34ns ± 2.47ns`|`379.14ns`|`199.34ns - 400.52ns`|`258.34ns ± 68.49ns`|`1.35μs`|`914.3ns - 1.35μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.76ns ± 467.46ps`|`57ns`|`15.91ns - 63.35ns`|`24.76ns ± 100.8ns`|`1.47μs`|`1.05μs - 1.56μs`|
|linked list map|`524288`|`28.57ns ± 450.58ps`|`61.66ns`|`20.02ns - 62.02ns`|`28.57ns ± 98.83ns`|`1.34μs`|`1.06μs - 1.35μs`|
|two map buckets|`524288`|`34.85ns ± 541.93ps`|`70.92ns`|`22.79ns - 70.95ns`|`34.85ns ± 93.47ns`|`1.22μs`|`972.95ns - 1.25μs`|
|two object buckets|`524288`|`47.1ns ± 412.28ps`|`65.93ns`|`38.44ns - 69.18ns`|`47.1ns ± 91.4ns`|`1.25μs`|`957.17ns - 1.31μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`53.89ns ± 412.79ps`|`63.64ns`|`30.47ns - 79.22ns`|`53.89ns ± 90.49ns`|`1.21μs`|`964.4ns - 1.22μs`|
|two object buckets|`524288`|`92.79ns ± 470.83ps`|`106.37ns`|`82.73ns - 109.96ns`|`92.79ns ± 84.69ns`|`1.18μs`|`919.85ns - 1.25μs`|
|map|`524288`|`93.9ns ± 776.3ps`|`118.19ns`|`78.78ns - 126.72ns`|`93.9ns ± 87.74ns`|`1.23μs`|`923.84ns - 1.24μs`|
|linked list map|`524288`|`117.04ns ± 749.4ps`|`132.64ns`|`92.23ns - 173.97ns`|`117.04ns ± 87.16ns`|`1.26μs`|`988.72ns - 1.27μs`|### capacity 64

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`157.72ns ± 1.09ns`|`196.28ns`|`125.88ns - 204.33ns`|`157.72ns ± 79.66ns`|`1.21μs`|`957.54ns - 1.27μs`|
|linked list map|`524288`|`209.52ns ± 1.01ns`|`238.93ns`|`187.26ns - 239.61ns`|`209.52ns ± 74.33ns`|`1.18μs`|`946.89ns - 1.18μs`|
|map|`524288`|`219.55ns ± 2.18ns`|`279.47ns`|`164.83ns - 287.61ns`|`219.55ns ± 74.27ns`|`1.18μs`|`937.3ns - 1.22μs`|
|two object buckets|`524288`|`243.24ns ± 2.44ns`|`372.14ns`|`213.7ns - 404.27ns`|`243.24ns ± 69.56ns`|`1.16μs`|`915.26ns - 1.3μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.52ns ± 420.67ps`|`56.05ns`|`19.19ns - 63.95ns`|`27.52ns ± 105.43ns`|`1.42μs`|`1.03μs - 1.75μs`|
|linked list map|`524288`|`27.68ns ± 520.71ps`|`55.91ns`|`23.48ns - 57.6ns`|`27.68ns ± 105.31ns`|`1.42μs`|`1.08μs - 1.78μs`|
|two map buckets|`524288`|`46.52ns ± 482.46ps`|`71.78ns`|`37.91ns - 78.68ns`|`46.52ns ± 93.18ns`|`1.32μs`|`951.6ns - 1.33μs`|
|two object buckets|`524288`|`54.27ns ± 989.45ps`|`89.27ns`|`37.59ns - 157.4ns`|`54.27ns ± 92.73ns`|`1.32μs`|`987.03ns - 1.37μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`59.43ns ± 527.83ps`|`83.76ns`|`38.03ns - 96.03ns`|`59.43ns ± 90.59ns`|`1.29μs`|`973.19ns - 1.36μs`|
|two object buckets|`524288`|`89.36ns ± 566.64ps`|`105.92ns`|`78.96ns - 125.83ns`|`89.36ns ± 87.25ns`|`1.27μs`|`950.66ns - 1.29μs`|
|linked list map|`524288`|`118.96ns ± 608.81ps`|`136.47ns`|`106.25ns - 143.41ns`|`118.96ns ± 85.31ns`|`1.24μs`|`966.53ns - 1.26μs`|
|map|`524288`|`120.73ns ± 1.08ns`|`156.35ns`|`101.57ns - 168.01ns`|`120.73ns ± 83.66ns`|`1.21μs`|`938.99ns - 1.21μs`|### capacity 512

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`166.36ns ± 1.48ns`|`221.1ns`|`140.62ns - 244.54ns`|`166.36ns ± 80.2ns`|`1.18μs`|`938.71ns - 1.18μs`|
|linked list map|`524288`|`219.03ns ± 2.14ns`|`292.17ns`|`172.33ns - 336.73ns`|`219.03ns ± 76.3ns`|`1.25μs`|`980.66ns - 1.3μs`|
|two object buckets|`524288`|`250.01ns ± 1.52ns`|`282.29ns`|`213.37ns - 292.25ns`|`250.01ns ± 72.55ns`|`1.18μs`|`974.06ns - 1.22μs`|
|map|`524288`|`354.83ns ± 2.76ns`|`537.58ns`|`313.69ns - 565.49ns`|`354.83ns ± 64.29ns`|`1.19μs`|`934.87ns - 1.26μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`37.03ns ± 360.18ps`|`61.62ns`|`30.75ns - 63.57ns`|`37.03ns ± 104.87ns`|`1.33μs`|`1.07μs - 1.34μs`|
|map|`524288`|`37.89ns ± 478.22ps`|`72.3ns`|`28.16ns - 77.76ns`|`37.89ns ± 102.17ns`|`1.4μs`|`1.02μs - 1.59μs`|
|two map buckets|`524288`|`60.01ns ± 665.33ps`|`90.98ns`|`43.5ns - 92.66ns`|`60.01ns ± 95.99ns`|`1.32μs`|`1μs - 1.35μs`|
|two object buckets|`524288`|`63.55ns ± 552.97ps`|`97ns`|`39.79ns - 98.02ns`|`63.55ns ± 96.78ns`|`1.29μs`|`1μs - 1.37μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`58.92ns ± 476.43ps`|`87.82ns`|`41.7ns - 91.68ns`|`58.92ns ± 99.22ns`|`1.3μs`|`1.03μs - 1.34μs`|
|two object buckets|`524288`|`85.69ns ± 705.42ps`|`104.55ns`|`68.41ns - 145.08ns`|`85.69ns ± 93.52ns`|`1.37μs`|`974.15ns - 1.38μs`|
|linked list map|`524288`|`125.15ns ± 757.05ps`|`151.23ns`|`112.25ns - 167.48ns`|`125.15ns ± 92.2ns`|`1.37μs`|`1.01μs - 1.38μs`|
|map|`524288`|`263.99ns ± 3.53ns`|`408.72ns`|`224.9ns - 420.66ns`|`263.99ns ± 75.44ns`|`1.26μs`|`914.19ns - 1.27μs`|### capacity 4096

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`210.65ns ± 4.2ns`|`319.35ns`|`166.45ns - 356.12ns`|`210.65ns ± 86.7ns`|`1.36μs`|`1.06μs - 1.43μs`|
|linked list map|`524288`|`285.24ns ± 4.04ns`|`396.93ns`|`234.71ns - 510.39ns`|`285.24ns ± 85.02ns`|`1.41μs`|`1.1μs - 1.43μs`|
|two object buckets|`524288`|`306.18ns ± 3.59ns`|`458.44ns`|`259.34ns - 462.73ns`|`306.18ns ± 88.27ns`|`1.52μs`|`1.15μs - 1.68μs`|
|map|`524288`|`1.46μs ± 8.51ns`|`1.73μs`|`1.3μs - 1.74μs`|`1.46μs ± 28.62ns`|`1.36μs`|`1.04μs - 1.38μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`30.36ns ± 364.02ps`|`39.63ns`|`24.54ns - 64.99ns`|`30.36ns ± 120.41ns`|`1.65μs`|`1.22μs - 1.72μs`|
|two object buckets|`524288`|`33.83ns ± 673.32ps`|`72.2ns`|`21.03ns - 77.38ns`|`33.83ns ± 119.25ns`|`1.78μs`|`1.22μs - 1.79μs`|
|linked list map|`524288`|`52.07ns ± 587.9ps`|`83.1ns`|`42.81ns - 83.68ns`|`52.07ns ± 117.37ns`|`1.7μs`|`1.26μs - 1.8μs`|
|map|`524288`|`105.03ns ± 611.52ps`|`127.58ns`|`94.4ns - 132.57ns`|`105.03ns ± 116.38ns`|`1.7μs`|`1.2μs - 1.72μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`42.73ns ± 473.29ps`|`67.19ns`|`35.72ns - 75.98ns`|`42.73ns ± 132.13ns`|`1.91μs`|`1.26μs - 2.02μs`|
|two object buckets|`524288`|`53.37ns ± 630.42ps`|`87.25ns`|`39.02ns - 91.07ns`|`53.37ns ± 145.74ns`|`1.94μs`|`1.42μs - 1.96μs`|
|linked list map|`524288`|`57.03ns ± 609.01ps`|`88.45ns`|`30.72ns - 91.1ns`|`57.03ns ± 124.55ns`|`1.87μs`|`1.27μs - 1.89μs`|
|map|`524288`|`99.04ns ± 672.43ps`|`133.87ns`|`74.29ns - 134.38ns`|`99.04ns ± 137.22ns`|`2.02μs`|`1.41μs - 2.1μs`|## web apis
### Response

#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`910.27ns ± 5.9ns`|`1.1μs`|`819.95ns - 1.84μs`|
|new Headers().append()|`1048576`|`1.14μs ± 7.63ns`|`1.39μs`|`1μs - 2.28μs`|
|new Headers(record)|`1048576`|`1.15μs ± 9.5ns`|`1.53μs`|`976.37ns - 2.71μs`|
|new Headers().set()|`1048576`|`1.17μs ± 8.98ns`|`1.38μs`|`1.01μs - 2.52μs`|
|header pairs|`1048576`|`1.2μs ± 7.29ns`|`1.56μs`|`1.06μs - 2.33μs`|
|new Headers(pairs)|`1048576`|`1.4μs ± 9.35ns`|`1.73μs`|`1.27μs - 2.89μs`|
