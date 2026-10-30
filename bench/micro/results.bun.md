
* runtime: bun 1.4.4 (x64-linux)## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`720ps ± 3.66ps`|`1.89ns`|`625.98ps - 9.21ns`|
## string
### filter
#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`130.21ns ± 786.76ps`|`144.79ns`|`107.55ns - 171.38ns`|
|fp & procedural filter|`524288`|`132.28ns ± 2.64ns`|`221.09ns`|`117.12ns - 221.39ns`|
|fp|`524288`|`283.83ns ± 5.6ns`|`546.45ns`|`255.41ns - 586.57ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`183.73ns ± 3.49ns`|`351.47ns`|`163.51ns - 361.86ns`|
|fp & procedural filter|`524288`|`419.81ns ± 9.04ns`|`667.39ns`|`325.92ns - 738.2ns`|
|fp|`524288`|`592.39ns ± 4.35ns`|`775ns`|`569.76ns - 824.28ns`|
## object
### access
#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`1.59ns ± 14.15ps`|`1.98ns`|`1.35ns - 2.2ns`|
|monomorphic array|`524288`|`1.71ns ± 50.87ps`|`2.41ns`|`1.32ns - 7.58ns`|
|monomorphic object|`524288`|`2.02ns ± 69.33ps`|`3.05ns`|`1.48ns - 7.56ns`|
|polymorphic object|`524288`|`2.41ns ± 86.24ps`|`4.59ns`|`1.84ns - 7.84ns`|
|megamorphic object|`524288`|`9.3ns ± 284.82ps`|`16.21ns`|`7.42ns - 20.06ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`6.71ns ± 195.12ps`|`12.3ns`|`5.17ns - 27.91ns`|
|monomorphic object|`524288`|`9.48ns ± 196.79ps`|`16.12ns`|`5.75ns - 17.49ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (create with prototype)|`524288`|`3.93ns ± 67.32ps`|`6.7ns`|`3.7ns - 10.86ns`|
|prototype chain (override prototype)|`524288`|`3.98ns ± 102.03ps`|`7.23ns`|`3.59ns - 11.89ns`|
|direct assign|`524288`|`5.54ns ± 168.42ps`|`11.65ns`|`3.77ns - 11.79ns`|
|WeakMap store|`524288`|`11.65ns ± 216.25ps`|`17.87ns`|`5.4ns - 18.32ns`|
### init
#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`70.74ns ± 318.41ps`|`79.03ns`|`66.7ns - 81.47ns`|
|Object.create(null)|`524288`|`356.94ns ± 1.25ns`|`401.98ns`|`343.52ns - 479.67ns`|
|object literal (computed properties)|`524288`|`357.38ns ± 1.01ns`|`407.79ns`|`344.87ns - 439.51ns`|
|function constructor|`524288`|`382.67ns ± 816.47ps`|`417.4ns`|`367.35ns - 423.23ns`|
|object literal|`524288`|`428.31ns ± 6.6ns`|`602.05ns`|`380.36ns - 602.53ns`|
|function constructor (freezed proto)|`524288`|`435.2ns ± 5.87ns`|`608.7ns`|`391.82ns - 609.25ns`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Object.create()|`524288`|`962.04ps ± 5.81ps`|`1.05ns`|`946.53ps - 1.69ns`|
|constructor|`524288`|`962.64ps ± 5.92ps`|`1.16ns`|`948.97ps - 1.68ns`|
|set prototype|`524288`|`972.36ps ± 7.19ps`|`1.48ns`|`944.09ps - 1.63ns`|
|function constructor|`524288`|`1.01ns ± 44.92ps`|`1.31ns`|`944.09ps - 6.72ns`|
|set __proto__|`524288`|`33.27ns ± 279.33ps`|`41.95ns`|`30.99ns - 50.33ns`|
|Object.setPrototypeOf()|`524288`|`44.54ns ± 294.66ps`|`51.97ns`|`41.87ns - 52.29ns`|
|object spread|`524288`|`74.4ns ± 450.68ps`|`95.16ns`|`69.1ns - 99.78ns`|
## array
### unique items
#### size 8
##### 1 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`57.79ns ± 979.34ps`|`104.37ns`|`47.99ns - 115.16ns`|
|Set|`1048576`|`151.53ns ± 1.48ns`|`268.35ns`|`135.39ns - 273.6ns`|
|Set direct assign|`1048576`|`198.68ns ± 586.97ps`|`235.14ns`|`179.47ns - 258.77ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`28.63ns ± 213.47ps`|`37.69ns`|`25ns - 52.1ns`|
|Set|`1048576`|`84.75ns ± 1.06ns`|`141.91ns`|`68.36ns - 144.06ns`|
|Set direct assign|`1048576`|`120.16ns ± 567.52ps`|`141.69ns`|`110.32ns - 216.69ns`|
##### 2 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`44.67ns ± 605.6ps`|`75.7ns`|`36.72ns - 78.62ns`|
|Set|`1048576`|`162.24ns ± 612.78ps`|`186.18ns`|`149.3ns - 252.64ns`|
|Set direct assign|`1048576`|`206.28ns ± 1.46ns`|`361.99ns`|`191.6ns - 402.82ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`43.27ns ± 437.25ps`|`74.49ns`|`37.89ns - 80.11ns`|
|Set|`1048576`|`79.71ns ± 438.58ps`|`97.76ns`|`71.11ns - 135.05ns`|
|Set direct assign|`1048576`|`123.97ns ± 1.3ns`|`233.41ns`|`114.41ns - 239.86ns`|
##### 4 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`91.68ns ± 1.22ns`|`161.99ns`|`80.14ns - 164.27ns`|
|Set|`1048576`|`191.85ns ± 2.34ns`|`335.16ns`|`171.67ns - 341.75ns`|
|Set direct assign|`1048576`|`231.17ns ± 576.81ps`|`255.17ns`|`214.73ns - 264.59ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`89.45ns ± 966.65ps`|`159.94ns`|`80.86ns - 170.2ns`|
|Set|`1048576`|`96.58ns ± 1.21ns`|`157.11ns`|`77.86ns - 161.4ns`|
|Set direct assign|`1048576`|`127.57ns ± 267.99ps`|`137.11ns`|`121.54ns - 150.47ns`|
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`165.19ns ± 2.44ns`|`288.33ns`|`140.59ns - 294.47ns`|
|Set|`1048576`|`354.48ns ± 4.44ns`|`523.94ns`|`277.51ns - 533.2ns`|
|Set direct assign|`1048576`|`356.76ns ± 3.35ns`|`639.35ns`|`326.76ns - 657.25ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`167.77ns ± 2.41ns`|`278.7ns`|`141.73ns - 282.98ns`|
|Set|`1048576`|`182.01ns ± 2.1ns`|`237.77ns`|`143.73ns - 267.08ns`|
|Set direct assign|`1048576`|`199.11ns ± 1.71ns`|`317.88ns`|`183.38ns - 355.59ns`|
#### size 16
##### 2 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`80.46ns ± 1.93ns`|`132.69ns`|`65.11ns - 135.7ns`|
|Set|`524288`|`235.7ns ± 4.17ns`|`396.3ns`|`195.94ns - 398.02ns`|
|Set direct assign|`524288`|`299.19ns ± 3.4ns`|`584ns`|`285.96ns - 585.05ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`77.38ns ± 1.29ns`|`132.03ns`|`67.03ns - 134ns`|
|Set|`524288`|`151.25ns ± 2.92ns`|`245.95ns`|`119.55ns - 246.48ns`|
|Set direct assign|`524288`|`214.93ns ± 2.55ns`|`411.86ns`|`200.22ns - 412.16ns`|
##### 4 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`138.54ns ± 2.41ns`|`256.69ns`|`125.74ns - 258.19ns`|
|Set|`524288`|`251.3ns ± 4.26ns`|`446.6ns`|`219.17ns - 456.03ns`|
|Set direct assign|`524288`|`338.13ns ± 5.6ns`|`628.27ns`|`309.99ns - 633.56ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`146.42ns ± 3.11ns`|`251.89ns`|`127.55ns - 255.69ns`|
|Set|`524288`|`148.01ns ± 3.43ns`|`257.94ns`|`124.67ns - 260.42ns`|
|Set direct assign|`524288`|`224.25ns ± 2.81ns`|`414.16ns`|`207.39ns - 415.84ns`|
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`237.73ns ± 361.15ps`|`250.18ns`|`221.64ns - 253.98ns`|
|Set|`524288`|`407.72ns ± 9.19ns`|`652.45ns`|`326.59ns - 665.22ns`|
|Set direct assign|`524288`|`515.49ns ± 8.02ns`|`639.25ns`|`410.27ns - 648.56ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`252.3ns ± 4.99ns`|`443.83ns`|`221.86ns - 446.37ns`|
|Set|`524288`|`297.68ns ± 3.95ns`|`371.63ns`|`196.02ns - 378.7ns`|
|Set direct assign|`524288`|`362.34ns ± 6.09ns`|`505.53ns`|`272.23ns - 530.58ns`|
##### 16 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`401.18ns ± 8.28ns`|`714.85ns`|`344.92ns - 724.18ns`|
|Set|`524288`|`560.79ns ± 9.32ns`|`732.03ns`|`471.24ns - 734.12ns`|
|Set direct assign|`524288`|`588.17ns ± 4.27ns`|`788.02ns`|`563.39ns - 789.39ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`294.73ns ± 5.47ns`|`391.98ns`|`233.19ns - 392.89ns`|
|Set direct assign|`524288`|`343.3ns ± 4.7ns`|`487.34ns`|`312.45ns - 495.76ns`|
|Array.includes()|`524288`|`403.09ns ± 8.8ns`|`681.61ns`|`341.69ns - 682.24ns`|
#### size 64
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`744.3ns ± 18.08ns`|`912.61ns`|`635.54ns - 912.61ns`|
|Array.includes()|`131072`|`864.04ns ± 49.56ns`|`1.49μs`|`723.7ns - 1.49μs`|
|Set direct assign|`131072`|`905.99ns ± 5.27ns`|`1.07μs`|`884.61ns - 1.07μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`563.11ns ± 13.37ns`|`709.07ns`|`505.79ns - 709.07ns`|
|Array.includes()|`131072`|`751.34ns ± 1.74ns`|`790.71ns`|`742.81ns - 790.71ns`|
|Set direct assign|`131072`|`901.93ns ± 13.79ns`|`1.02μs`|`756.6ns - 1.02μs`|
##### 16 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`893.76ns ± 23.37ns`|`1.35μs`|`804.69ns - 1.35μs`|
|Array.includes()|`131072`|`1.11μs ± 6.96ns`|`1.32μs`|`1.09μs - 1.32μs`|
|Set direct assign|`131072`|`1.13μs ± 30.9ns`|`2.09μs`|`1.08μs - 2.09μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`627.82ns ± 13.11ns`|`793.87ns`|`571.47ns - 793.87ns`|
|Set direct assign|`131072`|`900.33ns ± 15.13ns`|`1.03μs`|`826.4ns - 1.03μs`|
|Array.includes()|`131072`|`1.24μs ± 33.18ns`|`1.83μs`|`1.1μs - 1.83μs`|
##### 32 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.68μs ± 28.28ns`|`1.99μs`|`1.4μs - 1.99μs`|
|Set direct assign|`131072`|`1.86μs ± 39.22ns`|`2.67μs`|`1.7μs - 2.67μs`|
|Array.includes()|`131072`|`2.19μs ± 19.24ns`|`2.59μs`|`2.09μs - 2.59μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`918.8ns ± 10.56ns`|`1.2μs`|`878.64ns - 1.2μs`|
|Set direct assign|`131072`|`1.36μs ± 34.86ns`|`2.02μs`|`1.21μs - 2.02μs`|
|Array.includes()|`131072`|`2.13μs ± 8.95ns`|`2.33μs`|`2.08μs - 2.33μs`|
##### 64 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.4μs ± 7.71ns`|`2.57μs`|`2.34μs - 2.57μs`|
|Set direct assign|`131072`|`2.66μs ± 7.31ns`|`2.83μs`|`2.61μs - 2.83μs`|
|Array.includes()|`131072`|`4.93μs ± 31.18ns`|`5.27μs`|`4.76μs - 5.27μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.2μs ± 39.44ns`|`1.93μs`|`1.03μs - 1.93μs`|
|Set direct assign|`131072`|`1.47μs ± 23.13ns`|`2.19μs`|`1.41μs - 2.19μs`|
|Array.includes()|`131072`|`4.84μs ± 23.18ns`|`5.27μs`|`4.74μs - 5.27μs`|
## coroutine
### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`121.86ns ± 1.85ns`|`205.53ns`|`99.65ns - 251.14ns`|
|await promise|`524288`|`125.38ns ± 1.98ns`|`214.47ns`|`109.66ns - 214.67ns`|
|await non-promise|`524288`|`139.79ns ± 22.49ns`|`1.4μs`|`85.75ns - 2.63μs`|
|async generator|`524288`|`607.99ns ± 1.56ns`|`651.21ns`|`586.32ns - 654.71ns`|
### async iterable
#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`906.41ns ± 4.7ns`|`994.98ns`|`862.69ns - 994.98ns`|
|generator|`131072`|`1.49μs ± 39ns`|`2.68μs`|`1.41μs - 2.68μs`|
## lru
### capacity 8
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`81.1ns ± 815.39ps`|`125.36ns`|`73.21ns - 135.94ns`|`81.1ns ± 13.09ns`|`473.94ns`|`182.26ns - 491.07ns`|
|map|`524288`|`107.97ns ± 530.19ps`|`128.94ns`|`98.21ns - 141.84ns`|`107.97ns ± 10.68ns`|`453.44ns`|`170.32ns - 551.04ns`|
|linked list map|`524288`|`110.88ns ± 987.62ps`|`173.08ns`|`101.26ns - 173.58ns`|`110.88ns ± 9.97ns`|`348.6ns`|`179.59ns - 410.46ns`|
|two object buckets|`524288`|`276.3ns ± 2.08ns`|`442.11ns`|`264.93ns - 467.06ns`|`276.3ns ± 4.34ns`|`434.13ns`|`201.61ns - 448.93ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`15.43ns ± 306.67ps`|`25.87ns`|`9.36ns - 27.22ns`|`15.43ns ± 17.21ns`|`404.37ns`|`163.84ns - 581.57ns`|
|linked list map|`524288`|`23.33ns ± 413.66ps`|`41.61ns`|`18.55ns - 42.26ns`|`23.33ns ± 16.52ns`|`364.35ns`|`165.14ns - 580.93ns`|
|two map buckets|`524288`|`24.95ns ± 414.54ps`|`45.24ns`|`19.63ns - 49.39ns`|`24.95ns ± 17.46ns`|`625.38ns`|`162.89ns - 711.22ns`|
|two object buckets|`524288`|`96.6ns ± 926.63ps`|`142.11ns`|`86.91ns - 159.32ns`|`96.6ns ± 11.02ns`|`393.93ns`|`175.26ns - 451.83ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`60.56ns ± 683.34ps`|`90.83ns`|`47.39ns - 98.33ns`|`60.56ns ± 15.53ns`|`653.28ns`|`181.03ns - 709.16ns`|
|map|`524288`|`79.45ns ± 630.91ps`|`119.03ns`|`69.72ns - 121.44ns`|`79.45ns ± 14.19ns`|`562.28ns`|`179.71ns - 613.14ns`|
|linked list map|`524288`|`97.27ns ± 1.12ns`|`146.05ns`|`87.29ns - 151.43ns`|`97.27ns ± 12.17ns`|`394.62ns`|`191.26ns - 523.15ns`|
|two object buckets|`524288`|`216.3ns ± 2.71ns`|`367.88ns`|`198.3ns - 384.29ns`|`216.3ns ± 2.75ns`|`345.71ns`|`205.68ns - 392.23ns`|
### capacity 64
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`84.2ns ± 927.59ps`|`125.26ns`|`72.48ns - 125.51ns`|`84.2ns ± 13.52ns`|`485.85ns`|`186.94ns - 498.24ns`|
|linked list map|`524288`|`113ns ± 1.11ns`|`171.46ns`|`101.15ns - 175.92ns`|`113ns ± 11.36ns`|`442.88ns`|`194.46ns - 484.8ns`|
|map|`524288`|`145.98ns ± 2.03ns`|`221.52ns`|`130.95ns - 246.7ns`|`145.98ns ± 7.61ns`|`382ns`|`175.44ns - 556.06ns`|
|two object buckets|`524288`|`282.26ns ± 2.53ns`|`462.23ns`|`260.66ns - 470.02ns`|`282.26ns ± 3.44ns`|`373.82ns`|`217.52ns - 385.48ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`20.56ns ± 483.24ps`|`36.77ns`|`15.39ns - 56.84ns`|`20.56ns ± 21.4ns`|`468.35ns`|`167.37ns - 1.59μs`|
|map|`524288`|`21.38ns ± 451.4ps`|`39.75ns`|`15.34ns - 47.33ns`|`21.38ns ± 17.24ns`|`366.46ns`|`170.64ns - 473.81ns`|
|two map buckets|`524288`|`34.57ns ± 598.04ps`|`55.56ns`|`25.78ns - 56.17ns`|`34.57ns ± 18.13ns`|`505.19ns`|`160.93ns - 533.47ns`|
|two object buckets|`524288`|`101.26ns ± 796.73ps`|`149.32ns`|`91ns - 150.68ns`|`101.26ns ± 14.73ns`|`383.47ns`|`178.8ns - 1.33μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`52.41ns ± 554.12ps`|`72.54ns`|`45.32ns - 73.67ns`|`52.41ns ± 17.32ns`|`558.15ns`|`185.11ns - 640.37ns`|
|linked list map|`524288`|`83.87ns ± 1.21ns`|`123.62ns`|`71.34ns - 124.27ns`|`83.87ns ± 14.56ns`|`547.51ns`|`188.64ns - 827.11ns`|
|map|`524288`|`107.02ns ± 1.38ns`|`171.59ns`|`97.72ns - 182.99ns`|`107.02ns ± 11.09ns`|`433.15ns`|`177.11ns - 439.56ns`|
|two object buckets|`524288`|`208.96ns ± 2.15ns`|`354.15ns`|`188.45ns - 361.59ns`|`208.96ns ± 8.25ns`|`498.79ns`|`212.94ns - 1.1μs`|
### capacity 512
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`87.1ns ± 1.31ns`|`137.46ns`|`71.46ns - 149ns`|`87.1ns ± 15.97ns`|`571.18ns`|`198.9ns - 690.38ns`|
|linked list map|`524288`|`140.93ns ± 1.72ns`|`217.64ns`|`127.22ns - 218.06ns`|`140.93ns ± 14.78ns`|`662.93ns`|`214.46ns - 702.23ns`|
|map|`524288`|`229.82ns ± 2.71ns`|`373.72ns`|`210.31ns - 374.66ns`|`229.82ns ± 4.7ns`|`498.9ns`|`198.88ns - 586.53ns`|
|two object buckets|`524288`|`293.53ns ± 2.62ns`|`463.97ns`|`270.03ns - 472.45ns`|`293.53ns ± 3.63ns`|`431.84ns`|`232.98ns - 527.91ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`29.45ns ± 427.45ps`|`45.45ns`|`25.66ns - 47.33ns`|`29.45ns ± 22.24ns`|`582.85ns`|`213.37ns - 972.03ns`|
|map|`524288`|`29.47ns ± 387.85ps`|`45.22ns`|`20.45ns - 46.59ns`|`29.47ns ± 22.04ns`|`519.77ns`|`193.17ns - 573.37ns`|
|two map buckets|`524288`|`32.21ns ± 536.25ps`|`56.5ns`|`24.12ns - 57.25ns`|`32.21ns ± 23.32ns`|`521.97ns`|`206.9ns - 1.49μs`|
|two object buckets|`524288`|`97.02ns ± 1.13ns`|`149.47ns`|`70.82ns - 159.79ns`|`97.02ns ± 16.36ns`|`509.62ns`|`233.45ns - 597.02ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`54.49ns ± 695.36ps`|`88.21ns`|`46.66ns - 88.76ns`|`54.49ns ± 21.23ns`|`603.32ns`|`220.72ns - 645.33ns`|
|linked list map|`524288`|`105.38ns ± 1.25ns`|`171.41ns`|`94.11ns - 188.43ns`|`105.38ns ± 28.23ns`|`1.81μs`|`244.36ns - 2.07μs`|
|two object buckets|`524288`|`145.28ns ± 1.47ns`|`235.82ns`|`130.66ns - 253.75ns`|`145.28ns ± 15.9ns`|`554.16ns`|`234.37ns - 1.13μs`|
|map|`524288`|`184.31ns ± 1.33ns`|`236.11ns`|`170.97ns - 320.33ns`|`184.31ns ± 10.91ns`|`462.48ns`|`223.15ns - 1.11μs`|
### capacity 4096
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`85.35ns ± 1.07ns`|`132.76ns`|`70.61ns - 142.08ns`|`85.35ns ± 28.07ns`|`716.83ns`|`321.36ns - 827.25ns`|
|linked list map|`524288`|`191.57ns ± 4.29ns`|`339.57ns`|`137.29ns - 350.59ns`|`191.57ns ± 28.55ns`|`1.13μs`|`369.62ns - 1.41μs`|
|two object buckets|`524288`|`205.1ns ± 3.65ns`|`305.81ns`|`171.7ns - 401.62ns`|`205.1ns ± 21.03ns`|`1.11μs`|`322.78ns - 1.14μs`|
|map|`524288`|`1.27μs ± 62.48ns`|`4.72μs`|`1.03μs - 4.86μs`|`1.27μs ± 78.98ns`|`753.11ns`|`299.62ns - 799.76ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`27.93ns ± 476.55ps`|`46.51ns`|`15.25ns - 51.26ns`|`27.93ns ± 45.45ns`|`1.19μs`|`456.39ns - 1.19μs`|
|linked list map|`524288`|`58.22ns ± 944.36ps`|`84.11ns`|`44.17ns - 144.72ns`|`58.22ns ± 41ns`|`1.16μs`|`397.01ns - 1.22μs`|
|two object buckets|`524288`|`72.7ns ± 701.03ps`|`109.56ns`|`63.66ns - 117.94ns`|`72.7ns ± 36.29ns`|`831.2ns`|`365.3ns - 1.2μs`|
|map|`524288`|`80.49ns ± 685.73ps`|`101.43ns`|`69.45ns - 125.62ns`|`80.49ns ± 37.01ns`|`697.15ns`|`427.81ns - 844.96ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`46.32ns ± 566.32ps`|`67.67ns`|`31.86ns - 72.33ns`|`46.32ns ± 50.32ns`|`1.13μs`|`476.79ns - 1.25μs`|
|linked list map|`524288`|`60.04ns ± 397.86ps`|`74.71ns`|`54.2ns - 79.04ns`|`60.04ns ± 52.16ns`|`796.91ns`|`511.18ns - 802.21ns`|
|map|`524288`|`79.42ns ± 595.58ps`|`99.65ns`|`67.51ns - 101.81ns`|`79.42ns ± 55.81ns`|`1.14μs`|`529.12ns - 1.28μs`|
|two object buckets|`524288`|`207.05ns ± 2.49ns`|`352.9ns`|`174.84ns - 408.05ns`|`207.05ns ± 46.47ns`|`1.15μs`|`576.68ns - 1.44μs`|
## web apis
### Response
#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`434.52ns ± 4.04ns`|`608.05ns`|`372.93ns - 905.22ns`|
|new Headers().set()|`1048576`|`534.56ns ± 4.32ns`|`683.24ns`|`375.34ns - 848.16ns`|
|new Headers().append()|`1048576`|`553.16ns ± 4.69ns`|`742.6ns`|`399.97ns - 974.8ns`|
|header pairs|`1048576`|`578.08ns ± 4.09ns`|`719.33ns`|`509.5ns - 1.01μs`|
|new Headers(record)|`1048576`|`678.67ns ± 5.07ns`|`849.85ns`|`519.5ns - 1.35μs`|
|new Headers(pairs)|`1048576`|`803.55ns ± 5.25ns`|`961.18ns`|`631.18ns - 1.47μs`|

