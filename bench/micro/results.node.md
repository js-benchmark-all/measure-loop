* runtime: node 27.0.0-alpha.0.0.0 (x64-linux)
## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`333.88ps ± 10.87ps`|`247.07ps`|`241.94ps - 28.47ns`|## string
### filter

#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`19.37ns ± 510.08ps`|`38.12ns`|`9.05ns - 38.43ns`|
|regex|`524288`|`76.36ns ± 936.64ps`|`99.98ns`|`42.57ns - 100.82ns`|
|fp|`524288`|`154.37ns ± 3.14ns`|`250.87ns`|`107.03ns - 335.96ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`118.96ns ± 2.16ns`|`157.32ns`|`68.17ns - 256.46ns`|
|fp & procedural filter|`524288`|`250ns ± 6.62ns`|`449.99ns`|`144.99ns - 468.57ns`|
|fp|`524288`|`280.48ns ± 3.99ns`|`423.02ns`|`241.11ns - 556.84ns`|## object
### access

#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic object|`524288`|`4.25ns ± 494.34ps`|`24.09ns`|`1.66ns - 26.62ns`|
|monomorphic object|`524288`|`4.88ns ± 591.6ps`|`18.58ns`|`828.86ps - 18.77ns`|
|monomorphic array|`524288`|`5.13ns ± 593.53ps`|`18.62ns`|`1ns - 19.68ns`|
|polymorphic array|`524288`|`5.28ns ± 574.88ps`|`19.4ns`|`1.08ns - 19.53ns`|
|megamorphic object|`524288`|`13.32ns ± 555.44ps`|`30.81ns`|`5.78ns - 38.61ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.52ns ± 487.93ps`|`24.27ns`|`1.94ns - 26.05ns`|
|monomorphic object|`524288`|`5.88ns ± 335.74ps`|`14.45ns`|`3.19ns - 18.91ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`5.36ns ± 188.24ps`|`16.97ns`|`4.58ns - 17.06ns`|
|prototype chain (override prototype)|`524288`|`7.05ns ± 145.56ps`|`13.96ns`|`4.96ns - 23.17ns`|
|prototype chain (create with prototype)|`524288`|`8.18ns ± 248.06ps`|`23.48ns`|`5.67ns - 31.06ns`|
|WeakMap store|`524288`|`9.16ns ± 393.34ps`|`22.26ns`|`4.37ns - 43.83ns`|### init

#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`118.12ns ± 1.35ns`|`139.74ns`|`87.2ns - 159.25ns`|
|Object.create(null)|`524288`|`157.84ns ± 2.53ns`|`302.72ns`|`141.94ns - 378.49ns`|
|object literal (computed properties)|`524288`|`610.69ns ± 2.29ns`|`686.02ns`|`588.28ns - 766.84ns`|
|function constructor (freezed proto)|`524288`|`629.17ns ± 1.34ns`|`691.64ns`|`612.59ns - 695.6ns`|
|function constructor|`524288`|`652.8ns ± 3.03ns`|`723.89ns`|`617.38ns - 727.36ns`|
|object literal|`524288`|`666.99ns ± 2.59ns`|`711.55ns`|`623.48ns - 746.23ns`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`5.93ns ± 868.88ps`|`38.3ns`|`1.59ns - 40.04ns`|
|Object.create()|`524288`|`7.87ns ± 1.2ns`|`77.04ns`|`877.93ps - 92.39ns`|
|set prototype|`524288`|`8.53ns ± 949.98ps`|`42.05ns`|`1.18ns - 81.52ns`|
|constructor|`524288`|`13.55ns ± 1.84ns`|`107.5ns`|`1.06ns - 109.47ns`|
|object spread|`524288`|`59.65ns ± 1.91ns`|`94.93ns`|`48.55ns - 262.23ns`|
|Object.setPrototypeOf()|`524288`|`137.22ns ± 2.03ns`|`208.34ns`|`107.3ns - 208.97ns`|
|set __proto__|`524288`|`140.09ns ± 2.66ns`|`256.4ns`|`110.36ns - 264.08ns`|## array
### unique items
#### size 8
##### 1 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`41.6ns ± 491.69ps`|`57.53ns`|`17.75ns - 62.88ns`|
|Set|`1048576`|`95.36ns ± 834.47ps`|`142.36ns`|`82.3ns - 144.39ns`|
|Set direct assign|`1048576`|`109.09ns ± 1.07ns`|`162.19ns`|`94.95ns - 198.02ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`39.57ns ± 351.87ps`|`55.24ns`|`35.64ns - 58.71ns`|
|Set|`1048576`|`59.13ns ± 336.44ps`|`77.66ns`|`53.18ns - 80.47ns`|
|Set direct assign|`1048576`|`67.6ns ± 306.33ps`|`83.3ns`|`60.35ns - 94.85ns`|##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`54.09ns ± 209.06ps`|`62.74ns`|`48.51ns - 73.33ns`|
|Set|`1048576`|`117.23ns ± 1.36ns`|`158.92ns`|`86.67ns - 160.55ns`|
|Set direct assign|`1048576`|`120ns ± 1.1ns`|`171.33ns`|`100.46ns - 172.59ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`61.08ns ± 289.62ps`|`83.46ns`|`55.01ns - 85.28ns`|
|Set direct assign|`1048576`|`72.04ns ± 462.71ps`|`101.68ns`|`61.26ns - 105.34ns`|
|Array.includes()|`1048576`|`88.23ns ± 448.22ps`|`112.44ns`|`78.13ns - 121.1ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`73.83ns ± 980.27ps`|`102.65ns`|`57.22ns - 247.85ns`|
|Set|`1048576`|`120.52ns ± 972.21ps`|`189.04ns`|`98.55ns - 194.49ns`|
|Set direct assign|`1048576`|`131.37ns ± 1.36ns`|`201.25ns`|`114.7ns - 204.4ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`66.65ns ± 436.34ps`|`89.76ns`|`56.96ns - 91.95ns`|
|Set direct assign|`1048576`|`71.15ns ± 373.11ps`|`100.06ns`|`63.03ns - 102.13ns`|
|Array.includes()|`1048576`|`168.08ns ± 1.59ns`|`208.24ns`|`131.38ns - 350.77ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`99.15ns ± 918.7ps`|`148.21ns`|`86.94ns - 153.93ns`|
|Set direct assign|`1048576`|`176.06ns ± 2.34ns`|`247.09ns`|`140.15ns - 256.06ns`|
|Set|`1048576`|`179.24ns ± 520.59ps`|`187.93ns`|`155.88ns - 285.34ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`83.75ns ± 1.1ns`|`156.18ns`|`68.6ns - 186.17ns`|
|Set|`1048576`|`109.9ns ± 1.11ns`|`155.49ns`|`89.95ns - 156.96ns`|
|Array.includes()|`1048576`|`325.92ns ± 2.38ns`|`398.65ns`|`268.52ns - 405.21ns`|#### size 16
##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`140.6ns ± 1.58ns`|`214.85ns`|`114.9ns - 217.47ns`|
|Set direct assign|`524288`|`175.92ns ± 2.56ns`|`245.59ns`|`141.43ns - 253.72ns`|
|Array.includes()|`524288`|`184.86ns ± 2.08ns`|`223.08ns`|`130.9ns - 233.81ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`96.64ns ± 1.06ns`|`130.79ns`|`78.63ns - 133.89ns`|
|Set direct assign|`524288`|`132.58ns ± 1.49ns`|`166.68ns`|`97.37ns - 168.14ns`|
|Array.includes()|`524288`|`183.9ns ± 1.7ns`|`219.22ns`|`134.53ns - 220.78ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`164.55ns ± 2.33ns`|`242.05ns`|`136.05ns - 242.51ns`|
|Set direct assign|`524288`|`203.14ns ± 4.94ns`|`381.11ns`|`149.81ns - 512.99ns`|
|Array.includes()|`524288`|`360.98ns ± 3.54ns`|`461.38ns`|`286.61ns - 484.6ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`95.84ns ± 392.6ps`|`112.58ns`|`89.75ns - 127.46ns`|
|Set direct assign|`524288`|`109.86ns ± 996.6ps`|`171.12ns`|`99.28ns - 174.42ns`|
|Array.includes()|`524288`|`347.4ns ± 5.77ns`|`455.12ns`|`273.2ns - 455.64ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`179.04ns ± 5.9ns`|`471.02ns`|`153ns - 539.1ns`|
|Set direct assign|`524288`|`220.45ns ± 3.75ns`|`312.23ns`|`175.48ns - 313.19ns`|
|Set|`524288`|`223.29ns ± 2.1ns`|`354.89ns`|`211.15ns - 361.02ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`124.87ns ± 1.73ns`|`178.36ns`|`104.86ns - 179.26ns`|
|Set|`524288`|`155.63ns ± 2.22ns`|`211.85ns`|`123.04ns - 214.57ns`|
|Array.includes()|`524288`|`816.34ns ± 13.97ns`|`1.62μs`|`727.96ns - 1.81μs`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`362.96ns ± 3.69ns`|`430.79ns`|`311.88ns - 442.17ns`|
|Set|`524288`|`410.06ns ± 9.22ns`|`954.05ns`|`334.47ns - 1.04μs`|
|Array.includes()|`524288`|`677.72ns ± 4.91ns`|`786.33ns`|`625.6ns - 791.28ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`175.67ns ± 2.39ns`|`267.74ns`|`157.04ns - 268.52ns`|
|Set|`524288`|`188.17ns ± 733.8ps`|`234.38ns`|`178.35ns - 239.28ns`|
|Array.includes()|`524288`|`704.85ns ± 5.47ns`|`811.02ns`|`631.7ns - 811.87ns`|#### size 64
##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`452.82ns ± 7.76ns`|`526.79ns`|`410.06ns - 526.79ns`|
|Set|`131072`|`492.55ns ± 12.42ns`|`596.45ns`|`426.06ns - 596.45ns`|
|Array.includes()|`131072`|`2.92μs ± 10.96ns`|`3.01μs`|`2.83μs - 3.01μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`370.22ns ± 7.12ns`|`496.63ns`|`331.94ns - 496.63ns`|
|Set|`131072`|`378.42ns ± 9.36ns`|`460.85ns`|`333.91ns - 460.85ns`|
|Array.includes()|`131072`|`2.92μs ± 10.64ns`|`3.01μs`|`2.82μs - 3.01μs`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`558.13ns ± 6.78ns`|`621.97ns`|`524.7ns - 621.97ns`|
|Set|`131072`|`583.74ns ± 11.26ns`|`671.83ns`|`521.61ns - 671.83ns`|
|Array.includes()|`131072`|`3.29μs ± 11.62ns`|`3.41μs`|`3.21μs - 3.41μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`414.09ns ± 5.51ns`|`467.71ns`|`383.75ns - 467.71ns`|
|Set|`131072`|`441.45ns ± 9.06ns`|`518.26ns`|`393.39ns - 518.26ns`|
|Array.includes()|`131072`|`3.18μs ± 10.46ns`|`3.29μs`|`3.12μs - 3.29μs`|##### 32 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`826.62ns ± 12.29ns`|`933.25ns`|`752.1ns - 933.25ns`|
|Set direct assign|`131072`|`848.19ns ± 6.82ns`|`905.88ns`|`796.79ns - 905.88ns`|
|Array.includes()|`131072`|`4.19μs ± 14.15ns`|`4.33μs`|`4.04μs - 4.33μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`496.91ns ± 6.53ns`|`559.68ns`|`457.88ns - 559.68ns`|
|Set|`131072`|`509.98ns ± 11.04ns`|`631.14ns`|`451.84ns - 631.14ns`|
|Array.includes()|`131072`|`4.19μs ± 15.54ns`|`4.4μs`|`4.06μs - 4.4μs`|##### 64 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.31μs ± 11.55ns`|`1.41μs`|`1.24μs - 1.41μs`|
|Set direct assign|`131072`|`1.37μs ± 7.03ns`|`1.44μs`|`1.3μs - 1.44μs`|
|Array.includes()|`131072`|`3.19μs ± 14.2ns`|`3.36μs`|`3.03μs - 3.36μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`706.15ns ± 6.32ns`|`766.09ns`|`664.88ns - 766.09ns`|
|Set|`131072`|`715.93ns ± 11.79ns`|`861.03ns`|`656.57ns - 861.03ns`|
|Array.includes()|`131072`|`12.81μs ± 143.8ns`|`17.28μs`|`12.52μs - 17.28μs`|## coroutine

### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`78.07ns ± 1.35ns`|`149.04ns`|`64.69ns - 195.66ns`|
|await non-promise|`524288`|`83.81ns ± 585.04ps`|`113.33ns`|`63.7ns - 115.59ns`|
|generator|`524288`|`93.24ns ± 1.27ns`|`155.65ns`|`83.39ns - 160.77ns`|
|async generator|`524288`|`428.12ns ± 11ns`|`1.14μs`|`379.2ns - 1.15μs`|### async iterable

#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`539.56ns ± 15.34ns`|`810.1ns`|`485.1ns - 810.1ns`|
|generator|`131072`|`1.4μs ± 56.53ns`|`2.82μs`|`1.04μs - 2.82μs`|## lru
### capacity 8

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`114.6ns ± 1.44ns`|`145.91ns`|`95.93ns - 150.21ns`|`114.6ns ± 52.2ns`|`768.05ns`|`674.77ns - 778.94ns`|
|map|`524288`|`137.3ns ± 1.59ns`|`172.27ns`|`115.63ns - 200.53ns`|`137.3ns ± 51.1ns`|`792.25ns`|`674.56ns - 804.05ns`|
|linked list map|`524288`|`158.84ns ± 2.02ns`|`219.16ns`|`135.38ns - 310.21ns`|`158.84ns ± 51.11ns`|`931.33ns`|`669.4ns - 1.48μs`|
|two object buckets|`524288`|`181.19ns ± 2.25ns`|`279.45ns`|`151.28ns - 313.05ns`|`181.19ns ± 46.72ns`|`756.82ns`|`664.49ns - 908.17ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`17.35ns ± 375.27ps`|`47.04ns`|`12.91ns - 48.27ns`|`17.35ns ± 78.4ns`|`1.28μs`|`829.85ns - 2.1μs`|
|linked list map|`524288`|`22.97ns ± 1.7ns`|`50.91ns`|`14.65ns - 234.74ns`|`22.97ns ± 71.16ns`|`959.82ns`|`760.35ns - 1.01μs`|
|two map buckets|`524288`|`26.33ns ± 335.99ps`|`40.11ns`|`15.48ns - 55.09ns`|`26.33ns ± 66.14ns`|`887.87ns`|`649.43ns - 1.03μs`|
|two object buckets|`524288`|`31ns ± 337.01ps`|`52.28ns`|`24.94ns - 53.3ns`|`31ns ± 62.33ns`|`800.99ns`|`686.1ns - 811.91ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`36.63ns ± 260.44ps`|`54.73ns`|`34.69ns - 60.18ns`|`36.63ns ± 60.85ns`|`792ns`|`684.22ns - 837.3ns`|
|two object buckets|`524288`|`58.77ns ± 262.46ps`|`70.3ns`|`47.78ns - 76.08ns`|`58.77ns ± 58.16ns`|`790.78ns`|`685.09ns - 796.87ns`|
|map|`524288`|`61.02ns ± 426.33ps`|`78.18ns`|`55.63ns - 85.71ns`|`61.02ns ± 60.04ns`|`796.75ns`|`695.02ns - 812.6ns`|
|linked list map|`524288`|`80.56ns ± 360.93ps`|`96.49ns`|`75.56ns - 113.06ns`|`80.56ns ± 58.45ns`|`794.12ns`|`695.46ns - 831.28ns`|### capacity 64

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`112.18ns ± 841.46ps`|`140.77ns`|`94.58ns - 159.91ns`|`112.18ns ± 54.24ns`|`779.81ns`|`681.1ns - 803.16ns`|
|linked list map|`524288`|`153.95ns ± 1.84ns`|`206.79ns`|`129.14ns - 253.51ns`|`153.95ns ± 49.13ns`|`746.59ns`|`665.5ns - 761.76ns`|
|two object buckets|`524288`|`169.33ns ± 2.36ns`|`271.47ns`|`146.68ns - 345.11ns`|`169.33ns ± 50.83ns`|`1.36μs`|`658.08ns - 1.65μs`|
|map|`524288`|`169.69ns ± 4.4ns`|`425.11ns`|`132.77ns - 425.56ns`|`169.69ns ± 54ns`|`1.34μs`|`695.1ns - 1.51μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`20.21ns ± 482.55ps`|`48.09ns`|`15.41ns - 48.41ns`|`20.21ns ± 70.48ns`|`1.54μs`|`708.28ns - 1.67μs`|
|linked list map|`524288`|`21.98ns ± 226ps`|`38.74ns`|`17.63ns - 41.52ns`|`21.98ns ± 65.17ns`|`882.4ns`|`711.14ns - 883.27ns`|
|two map buckets|`524288`|`31.3ns ± 204.54ps`|`37.36ns`|`24.26ns - 37.72ns`|`31.3ns ± 60.53ns`|`783.76ns`|`670.64ns - 824.33ns`|
|two object buckets|`524288`|`34.56ns ± 334.7ps`|`58.38ns`|`28.4ns - 58.64ns`|`34.56ns ± 60.82ns`|`775.47ns`|`674.88ns - 837.23ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`41.13ns ± 409.29ps`|`68.92ns`|`38.74ns - 76ns`|`41.13ns ± 60.21ns`|`954.45ns`|`672.45ns - 1.22μs`|
|two object buckets|`524288`|`56.86ns ± 225.52ps`|`68.3ns`|`53.17ns - 74.24ns`|`56.86ns ± 57.36ns`|`800.06ns`|`654.97ns - 941.04ns`|
|map|`524288`|`74.73ns ± 499.13ps`|`98.65ns`|`67.46ns - 100.55ns`|`74.73ns ± 53.59ns`|`742.99ns`|`634.24ns - 864.01ns`|
|linked list map|`524288`|`79.58ns ± 429.92ps`|`102.16ns`|`74.83ns - 103.99ns`|`79.58ns ± 56.62ns`|`845.68ns`|`680.93ns - 998.11ns`|### capacity 512

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`109.17ns ± 788.42ps`|`128.46ns`|`92.39ns - 128.53ns`|`109.17ns ± 50.97ns`|`737.19ns`|`637.08ns - 755.54ns`|
|linked list map|`524288`|`172.5ns ± 1.71ns`|`222ns`|`142.42ns - 262.09ns`|`172.5ns ± 50.43ns`|`791.12ns`|`683.48ns - 820.95ns`|
|two object buckets|`524288`|`177.35ns ± 3.01ns`|`260.53ns`|`150.06ns - 488.3ns`|`177.35ns ± 49.03ns`|`1.28μs`|`636.89ns - 1.48μs`|
|map|`524288`|`232.08ns ± 1.95ns`|`328.54ns`|`202.27ns - 328.78ns`|`232.08ns ± 43.27ns`|`801.61ns`|`668.57ns - 817.97ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`23.62ns ± 429.21ps`|`46.87ns`|`20.9ns - 49.77ns`|`23.62ns ± 70.9ns`|`938.06ns`|`768.1ns - 1.72μs`|
|map|`524288`|`28.72ns ± 672.15ps`|`58.09ns`|`23.42ns - 68.53ns`|`28.72ns ± 74.38ns`|`1.71μs`|`711.72ns - 1.95μs`|
|two map buckets|`524288`|`40.03ns ± 346.99ps`|`60.02ns`|`36.27ns - 60.79ns`|`40.03ns ± 62.23ns`|`853.56ns`|`700.91ns - 1.03μs`|
|two object buckets|`524288`|`44.76ns ± 769.6ps`|`73.25ns`|`32.31ns - 118.18ns`|`44.76ns ± 71.1ns`|`2.03μs`|`734.53ns - 2.16μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`42.27ns ± 424.5ps`|`65.36ns`|`38.73ns - 75.93ns`|`42.27ns ± 64.45ns`|`899.65ns`|`707.07ns - 1.37μs`|
|two object buckets|`524288`|`58.42ns ± 309.96ps`|`77.47ns`|`53.13ns - 79.53ns`|`58.42ns ± 65.18ns`|`908.82ns`|`733.12ns - 973.78ns`|
|linked list map|`524288`|`83.05ns ± 553.6ps`|`115.43ns`|`77.09ns - 119.89ns`|`83.05ns ± 59.79ns`|`872.44ns`|`714.78ns - 878.54ns`|
|map|`524288`|`162.25ns ± 2.09ns`|`281.82ns`|`145.82ns - 296.12ns`|`162.25ns ± 55.31ns`|`1.53μs`|`712.47ns - 1.53μs`|### capacity 4096

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`134.06ns ± 5.25ns`|`373.67ns`|`100.22ns - 405.27ns`|`134.06ns ± 70.37ns`|`1.21μs`|`845.64ns - 1.38μs`|
|linked list map|`524288`|`187.38ns ± 1.93ns`|`246.22ns`|`162.35ns - 249.11ns`|`187.38ns ± 56.44ns`|`960.23ns`|`759.2ns - 1.07μs`|
|two object buckets|`524288`|`221.42ns ± 2.86ns`|`333ns`|`180.08ns - 333.64ns`|`221.42ns ± 56.05ns`|`965.48ns`|`774.72ns - 971.65ns`|
|map|`524288`|`914.74ns ± 5.62ns`|`1.09μs`|`846.72ns - 1.14μs`|`914.74ns ± 4.61ns`|`1.05μs`|`843.1ns - 1.05μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`17.92ns ± 386.37ps`|`46.88ns`|`14.78ns - 51.52ns`|`17.92ns ± 87.01ns`|`1.19μs`|`849.65ns - 1.23μs`|
|two map buckets|`524288`|`23.3ns ± 558.44ps`|`46.91ns`|`19.22ns - 49.26ns`|`23.3ns ± 83.9ns`|`1.11μs`|`881.62ns - 1.13μs`|
|linked list map|`524288`|`37.21ns ± 341.37ps`|`56.33ns`|`33.59ns - 58ns`|`37.21ns ± 79.6ns`|`1.04μs`|`850.62ns - 1.05μs`|
|map|`524288`|`84.62ns ± 870.66ps`|`131.05ns`|`74.31ns - 140.93ns`|`84.62ns ± 75.03ns`|`1.59μs`|`833.35ns - 1.84μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`28.54ns ± 344.47ps`|`56.11ns`|`26.1ns - 57.36ns`|`28.54ns ± 86.12ns`|`1.11μs`|`923.47ns - 1.21μs`|
|two map buckets|`524288`|`32.59ns ± 327.97ps`|`45.67ns`|`29.11ns - 62.87ns`|`32.59ns ± 102.79ns`|`1.52μs`|`1.07μs - 2μs`|
|linked list map|`524288`|`41.81ns ± 594.69ps`|`75.26ns`|`35.15ns - 79.59ns`|`41.81ns ± 97.29ns`|`1.36μs`|`1.03μs - 1.44μs`|
|map|`524288`|`87.64ns ± 614.67ps`|`104.11ns`|`75.8ns - 110.68ns`|`87.64ns ± 84.02ns`|`1.18μs`|`914.17ns - 1.2μs`|## web apis
### Response

#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`812.74ns ± 5.27ns`|`996.4ns`|`771.36ns - 1.77μs`|
|header pairs|`1048576`|`847.22ns ± 13.9ns`|`2.12μs`|`766.4ns - 2.57μs`|
|new Headers().append()|`1048576`|`882.23ns ± 4.61ns`|`1.17μs`|`832.98ns - 1.7μs`|
|new Headers().set()|`1048576`|`883.84ns ± 6.73ns`|`1.33μs`|`833.2ns - 1.86μs`|
|new Headers(record)|`1048576`|`912.68ns ± 4.23ns`|`1.01μs`|`861.08ns - 1.86μs`|
|new Headers(pairs)|`1048576`|`1.07μs ± 5.04ns`|`1.38μs`|`1.02μs - 1.9μs`|
