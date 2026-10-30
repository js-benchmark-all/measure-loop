* runtime: bun 1.4.4 (x64-linux)
## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`353.76ps ± 2.79ps`|`1.63ns`|`286.38ps - 5.22ns`|## string
### filter

#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`75.65ns ± 1.25ns`|`135.22ns`|`60.78ns - 135.35ns`|
|fp & procedural filter|`524288`|`112.26ns ± 1.37ns`|`157.13ns`|`88.68ns - 162.98ns`|
|fp|`524288`|`207.42ns ± 1.09ns`|`272.92ns`|`192.33ns - 273.97ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`148.83ns ± 2.24ns`|`232.03ns`|`124.62ns - 245.36ns`|
|fp & procedural filter|`524288`|`330.85ns ± 5.39ns`|`516.06ns`|`264.63ns - 522.55ns`|
|fp|`524288`|`503.43ns ± 5.1ns`|`659.63ns`|`439.42ns - 691.76ns`|## object
### access

#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`1.61ns ± 35.91ps`|`3.81ns`|`1.32ns - 4.86ns`|
|polymorphic array|`524288`|`1.73ns ± 39.47ps`|`4.65ns`|`1.38ns - 4.91ns`|
|monomorphic object|`524288`|`1.88ns ± 31.98ps`|`2.67ns`|`1.52ns - 5.58ns`|
|polymorphic object|`524288`|`2.53ns ± 31.83ps`|`3.33ns`|`2.27ns - 6.26ns`|
|megamorphic object|`524288`|`7.83ns ± 80.26ps`|`12.27ns`|`6.75ns - 12.99ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.46ns ± 87.09ps`|`9.19ns`|`4.45ns - 11.02ns`|
|monomorphic object|`524288`|`7.75ns ± 115.86ps`|`12.12ns`|`5.87ns - 12.85ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (override prototype)|`524288`|`2.88ns ± 24.65ps`|`4.02ns`|`2.62ns - 4.88ns`|
|prototype chain (create with prototype)|`524288`|`2.9ns ± 46.76ps`|`4.88ns`|`2.53ns - 7.16ns`|
|direct assign|`524288`|`3.13ns ± 42.82ps`|`5.06ns`|`2.92ns - 7.1ns`|
|WeakMap store|`524288`|`11.56ns ± 261.68ps`|`18.13ns`|`5ns - 18.64ns`|### init

#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`72.05ns ± 478.67ps`|`88.33ns`|`60.76ns - 95.12ns`|
|Object.create(null)|`524288`|`360.69ns ± 1.56ns`|`408.24ns`|`333.93ns - 416.68ns`|
|object literal|`524288`|`366.74ns ± 1.73ns`|`412.4ns`|`338.2ns - 443.78ns`|
|object literal (computed properties)|`524288`|`374.97ns ± 1.81ns`|`429.99ns`|`345.33ns - 441.4ns`|
|function constructor|`524288`|`398.65ns ± 2.37ns`|`485.11ns`|`360.78ns - 505.25ns`|
|function constructor (freezed proto)|`524288`|`399.93ns ± 2.06ns`|`464.88ns`|`356.35ns - 465.16ns`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|set prototype|`524288`|`1.21ns ± 7.71ps`|`1.74ns`|`1.12ns - 1.76ns`|
|function constructor|`524288`|`1.21ns ± 7.02ps`|`1.47ns`|`1.13ns - 1.53ns`|
|constructor|`524288`|`1.23ns ± 7.75ps`|`1.63ns`|`1.13ns - 1.72ns`|
|Object.create()|`524288`|`1.24ns ± 23.99ps`|`1.8ns`|`1.12ns - 4.12ns`|
|set __proto__|`524288`|`26.59ns ± 155.92ps`|`31.94ns`|`23.91ns - 33.35ns`|
|Object.setPrototypeOf()|`524288`|`36.09ns ± 385.63ps`|`49.38ns`|`30.83ns - 65.87ns`|
|object spread|`524288`|`61.2ns ± 346.7ps`|`70.04ns`|`54ns - 82.12ns`|## array
### unique items
#### size 8
##### 1 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`24.04ns ± 161.69ps`|`31.84ns`|`19.52ns - 36.11ns`|
|Set|`1048576`|`125.89ns ± 1.87ns`|`226.73ns`|`100.71ns - 233.71ns`|
|Set direct assign|`1048576`|`148.54ns ± 620.95ps`|`174.88ns`|`133.22ns - 209.9ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`24.18ns ± 296.28ps`|`43.27ns`|`19.34ns - 45.02ns`|
|Set|`1048576`|`67.95ns ± 930.51ps`|`116.61ns`|`53.87ns - 121.97ns`|
|Set direct assign|`1048576`|`95.06ns ± 410.86ps`|`113.36ns`|`83.95ns - 119.74ns`|##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`34.34ns ± 222.6ps`|`43.63ns`|`29.71ns - 58.06ns`|
|Set|`1048576`|`135.9ns ± 2.04ns`|`248.85ns`|`111.53ns - 257.36ns`|
|Set direct assign|`1048576`|`163.69ns ± 875.78ps`|`200.93ns`|`144.67ns - 262.03ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`37.02ns ± 518.35ps`|`67.32ns`|`29.71ns - 85.63ns`|
|Set|`1048576`|`64.67ns ± 335.51ps`|`78.08ns`|`56.58ns - 81.73ns`|
|Set direct assign|`1048576`|`97.21ns ± 1.15ns`|`205.63ns`|`84.38ns - 230.74ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`70.87ns ± 393.58ps`|`90.4ns`|`62.14ns - 117.21ns`|
|Set|`1048576`|`148.29ns ± 1.55ns`|`266.7ns`|`127.8ns - 315.63ns`|
|Set direct assign|`1048576`|`180.79ns ± 1.72ns`|`328.61ns`|`162.15ns - 376.2ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`70.65ns ± 764.56ps`|`122.24ns`|`58.98ns - 126.89ns`|
|Array.includes()|`1048576`|`70.92ns ± 652.42ps`|`117.45ns`|`62.77ns - 121.72ns`|
|Set direct assign|`1048576`|`100.36ns ± 688.49ps`|`166.23ns`|`90.66ns - 174.25ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`130.2ns ± 1.27ns`|`209.69ns`|`110ns - 291.63ns`|
|Set|`1048576`|`305.38ns ± 2.61ns`|`390.05ns`|`229.96ns - 443.05ns`|
|Set direct assign|`1048576`|`331.09ns ± 2.88ns`|`419.53ns`|`263.95ns - 534.86ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`133.46ns ± 1.28ns`|`222.55ns`|`114.54ns - 238.64ns`|
|Set|`1048576`|`164.15ns ± 1.33ns`|`221.14ns`|`133.83ns - 232.84ns`|
|Set direct assign|`1048576`|`197.15ns ± 1.39ns`|`251.67ns`|`159.11ns - 281.8ns`|#### size 16
##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`65.64ns ± 1.2ns`|`115.07ns`|`54.14ns - 120.19ns`|
|Set|`524288`|`183.82ns ± 3.46ns`|`325.51ns`|`154.22ns - 327.03ns`|
|Set direct assign|`524288`|`245.83ns ± 3.56ns`|`438.08ns`|`215.51ns - 438.3ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`72ns ± 1.32ns`|`118.97ns`|`60.56ns - 119.5ns`|
|Set|`524288`|`126.11ns ± 793.08ps`|`153.81ns`|`106.57ns - 163.21ns`|
|Set direct assign|`524288`|`176.04ns ± 1.32ns`|`228.52ns`|`156.4ns - 279.88ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`116.96ns ± 1.68ns`|`200.69ns`|`100.02ns - 212.31ns`|
|Set|`524288`|`208.88ns ± 4.75ns`|`365.21ns`|`174.66ns - 365.92ns`|
|Set direct assign|`524288`|`275.71ns ± 3.7ns`|`560.95ns`|`243.6ns - 561.59ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`109.95ns ± 983.36ps`|`126.11ns`|`100.5ns - 218.84ns`|
|Set|`524288`|`122.34ns ± 1.74ns`|`215.22ns`|`100.73ns - 218.39ns`|
|Set direct assign|`524288`|`183.55ns ± 2.76ns`|`320.31ns`|`161.9ns - 329.97ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`203.93ns ± 2.94ns`|`344.79ns`|`174.03ns - 349.93ns`|
|Set|`524288`|`318.99ns ± 4.18ns`|`564.85ns`|`272.97ns - 571.1ns`|
|Set direct assign|`524288`|`387.45ns ± 4.24ns`|`611.23ns`|`331.93ns - 616.83ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`211.73ns ± 4.03ns`|`355.3ns`|`178.34ns - 357.89ns`|
|Set|`524288`|`219.68ns ± 2.9ns`|`315.69ns`|`168.66ns - 339.46ns`|
|Set direct assign|`524288`|`270.78ns ± 2.56ns`|`400.25ns`|`220.25ns - 400.82ns`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`304.19ns ± 1.64ns`|`365.98ns`|`278.81ns - 370.3ns`|
|Set|`524288`|`471.25ns ± 8.24ns`|`807.18ns`|`378.12ns - 810.28ns`|
|Set direct assign|`524288`|`504.69ns ± 4.64ns`|`711.85ns`|`448.23ns - 883.06ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`228.74ns ± 2.63ns`|`362.76ns`|`200.1ns - 368.82ns`|
|Array.includes()|`524288`|`299.35ns ± 2.04ns`|`336.66ns`|`277.69ns - 512.74ns`|
|Set direct assign|`524288`|`312.48ns ± 3.17ns`|`516.08ns`|`269.52ns - 517.28ns`|#### size 64
##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`592.85ns ± 8.72ns`|`708.21ns`|`534ns - 708.21ns`|
|Array.includes()|`131072`|`628.04ns ± 4.67ns`|`700.06ns`|`589.14ns - 700.06ns`|
|Set direct assign|`131072`|`842.12ns ± 10.13ns`|`1.06μs`|`750.85ns - 1.06μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`545.89ns ± 15.64ns`|`822.07ns`|`473.76ns - 822.07ns`|
|Array.includes()|`131072`|`683.16ns ± 2.46ns`|`721.58ns`|`661.2ns - 721.58ns`|
|Set direct assign|`131072`|`748.1ns ± 14.96ns`|`1.17μs`|`684.87ns - 1.17μs`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`806.54ns ± 18.46ns`|`1.04μs`|`677.19ns - 1.04μs`|
|Array.includes()|`131072`|`951.16ns ± 7.1ns`|`1.05μs`|`907.86ns - 1.05μs`|
|Set direct assign|`131072`|`957.82ns ± 21.79ns`|`1.55μs`|`859.73ns - 1.55μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`528.9ns ± 4.21ns`|`575.55ns`|`489.39ns - 575.55ns`|
|Set direct assign|`131072`|`737.83ns ± 5.88ns`|`829.57ns`|`692.54ns - 829.57ns`|
|Array.includes()|`131072`|`978.82ns ± 7.9ns`|`1.04μs`|`913.24ns - 1.04μs`|##### 32 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.45μs ± 30.31ns`|`1.85μs`|`1.2μs - 1.85μs`|
|Set direct assign|`131072`|`1.61μs ± 27.91ns`|`2.31μs`|`1.44μs - 2.31μs`|
|Array.includes()|`131072`|`1.91μs ± 14.76ns`|`2.2μs`|`1.76μs - 2.2μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.01μs ± 18.04ns`|`1.33μs`|`856.94ns - 1.33μs`|
|Set direct assign|`131072`|`1.03μs ± 7.37ns`|`1.15μs`|`965.8ns - 1.15μs`|
|Array.includes()|`131072`|`2.04μs ± 84.47ns`|`3.96μs`|`1.75μs - 3.96μs`|##### 64 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.81μs ± 18.48ns`|`2.08μs`|`1.64μs - 2.08μs`|
|Set direct assign|`131072`|`2.04μs ± 14.54ns`|`2.19μs`|`1.89μs - 2.19μs`|
|Array.includes()|`131072`|`3.92μs ± 29.08ns`|`4.38μs`|`3.67μs - 4.38μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.09μs ± 13.02ns`|`1.27μs`|`960.81ns - 1.27μs`|
|Set direct assign|`131072`|`1.22μs ± 16.91ns`|`1.45μs`|`1.06μs - 1.45μs`|
|Array.includes()|`131072`|`4μs ± 39.5ns`|`4.49μs`|`3.58μs - 4.49μs`|## coroutine

### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`78.18ns ± 889.61ps`|`133.5ns`|`66.33ns - 143.76ns`|
|await non-promise|`524288`|`86.92ns ± 726.91ps`|`126.99ns`|`78.55ns - 144.81ns`|
|await promise|`524288`|`126.45ns ± 21.8ns`|`1.27μs`|`75.71ns - 2.59μs`|
|async generator|`524288`|`510.18ns ± 4.87ns`|`635.56ns`|`453.53ns - 936.95ns`|### async iterable

#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`730.75ns ± 12.33ns`|`1.05μs`|`659.48ns - 1.05μs`|
|generator|`131072`|`1.51μs ± 43.96ns`|`2.83μs`|`1.37μs - 2.83μs`|## lru
### capacity 8

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`74.39ns ± 770.73ps`|`104.26ns`|`62.65ns - 111.3ns`|`74.39ns ± 19.27ns`|`711.89ns`|`201.66ns - 1.36μs`|
|map|`524288`|`92.84ns ± 1.02ns`|`146.5ns`|`81.11ns - 153.25ns`|`92.84ns ± 15.09ns`|`625.17ns`|`197.59ns - 736.62ns`|
|linked list map|`524288`|`104.6ns ± 1.19ns`|`153.2ns`|`88.43ns - 165.44ns`|`104.6ns ± 16.42ns`|`547.96ns`|`211.93ns - 1.09μs`|
|two object buckets|`524288`|`268.43ns ± 1.59ns`|`336.74ns`|`247.7ns - 410.67ns`|`268.43ns ± 4.58ns`|`509.99ns`|`241.56ns - 642.57ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`15.42ns ± 310.82ps`|`26.01ns`|`9.49ns - 26.84ns`|`15.42ns ± 20.54ns`|`495.64ns`|`179.13ns - 989.37ns`|
|linked list map|`524288`|`21.83ns ± 291.84ps`|`35.55ns`|`16.72ns - 35.7ns`|`21.83ns ± 23.86ns`|`489.29ns`|`188.01ns - 1.67μs`|
|two map buckets|`524288`|`22.41ns ± 410.99ps`|`36.95ns`|`14.37ns - 40.85ns`|`22.41ns ± 23.27ns`|`1.13μs`|`183.18ns - 1.38μs`|
|two object buckets|`524288`|`85.29ns ± 729.79ps`|`123.05ns`|`74.51ns - 140.12ns`|`85.29ns ± 16.43ns`|`592.54ns`|`202.79ns - 714.45ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`54.76ns ± 684.89ps`|`81.86ns`|`40.3ns - 84.25ns`|`54.76ns ± 20.54ns`|`674.54ns`|`200.86ns - 940.95ns`|
|map|`524288`|`71.26ns ± 633.16ps`|`97.28ns`|`60.68ns - 114.97ns`|`71.26ns ± 19.21ns`|`613.88ns`|`203.76ns - 1.03μs`|
|linked list map|`524288`|`80.02ns ± 1.09ns`|`127.8ns`|`67.04ns - 134.08ns`|`80.02ns ± 17.54ns`|`568.06ns`|`212.38ns - 578.1ns`|
|two object buckets|`524288`|`205.4ns ± 2.2ns`|`320.18ns`|`171.58ns - 326.63ns`|`205.4ns ± 8.2ns`|`459.23ns`|`234.22ns - 492.04ns`|### capacity 64

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`76.68ns ± 977.79ps`|`114.54ns`|`60.12ns - 126.93ns`|`76.68ns ± 18.08ns`|`411.11ns`|`208.22ns - 925.43ns`|
|linked list map|`524288`|`99.57ns ± 1.13ns`|`147.58ns`|`83.16ns - 150.63ns`|`99.57ns ± 16.57ns`|`409.25ns`|`217.66ns - 919.18ns`|
|map|`524288`|`139.03ns ± 1.33ns`|`215.28ns`|`120.52ns - 224.09ns`|`139.03ns ± 12.22ns`|`672.31ns`|`207.72ns - 740.78ns`|
|two object buckets|`524288`|`281.73ns ± 1.87ns`|`412.62ns`|`258.8ns - 417.64ns`|`281.73ns ± 2.95ns`|`417.52ns`|`244.48ns - 423.23ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`18.8ns ± 297.12ps`|`27.98ns`|`13.79ns - 29.32ns`|`18.8ns ± 21.25ns`|`464.12ns`|`199.33ns - 572.66ns`|
|linked list map|`524288`|`19.46ns ± 371ps`|`33.78ns`|`11.56ns - 35.07ns`|`19.46ns ± 24.54ns`|`555.63ns`|`192.53ns - 1.38μs`|
|two map buckets|`524288`|`31.42ns ± 412.33ps`|`49.32ns`|`23.71ns - 53.56ns`|`31.42ns ± 21.04ns`|`580.94ns`|`182.6ns - 753.92ns`|
|two object buckets|`524288`|`92.28ns ± 785.09ps`|`135.21ns`|`80.65ns - 135.6ns`|`92.28ns ± 17.43ns`|`892.39ns`|`203.46ns - 903.01ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`45.74ns ± 705.66ps`|`72.36ns`|`34.65ns - 75.91ns`|`45.74ns ± 20.54ns`|`431.79ns`|`224.17ns - 576.87ns`|
|linked list map|`524288`|`67.87ns ± 888.42ps`|`105.13ns`|`55.84ns - 118.73ns`|`67.87ns ± 21.32ns`|`608.49ns`|`225.46ns - 1.23μs`|
|map|`524288`|`113.25ns ± 1.46ns`|`194.59ns`|`89.29ns - 204.74ns`|`113.25ns ± 16.36ns`|`424.26ns`|`197.6ns - 1.37μs`|
|two object buckets|`524288`|`215.71ns ± 1.65ns`|`277.65ns`|`189.65ns - 328.65ns`|`215.71ns ± 8.83ns`|`471.76ns`|`253.74ns - 553.35ns`|### capacity 512

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`74.92ns ± 601.67ps`|`103.45ns`|`61.28ns - 104.37ns`|`74.92ns ± 19.56ns`|`388.28ns`|`246.43ns - 442.64ns`|
|linked list map|`524288`|`119.94ns ± 1.28ns`|`173.43ns`|`103.63ns - 174.47ns`|`119.94ns ± 25.91ns`|`1.41μs`|`262.61ns - 1.54μs`|
|map|`524288`|`253.95ns ± 3.14ns`|`444.28ns`|`209.1ns - 473.06ns`|`253.95ns ± 7.39ns`|`502.64ns`|`242.02ns - 1μs`|
|two object buckets|`524288`|`271.96ns ± 3.1ns`|`438.15ns`|`238.51ns - 438.19ns`|`271.96ns ± 9.07ns`|`693.68ns`|`258.51ns - 1.08μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.74ns ± 422.58ps`|`44.28ns`|`19.31ns - 52.63ns`|`27.74ns ± 27.96ns`|`501.38ns`|`249.55ns - 566.73ns`|
|linked list map|`524288`|`28.44ns ± 500.33ps`|`47.16ns`|`19.5ns - 47.19ns`|`28.44ns ± 26.04ns`|`530.55ns`|`231.17ns - 549.47ns`|
|two map buckets|`524288`|`29.84ns ± 485.74ps`|`45.14ns`|`22.41ns - 55.03ns`|`29.84ns ± 26.28ns`|`445.82ns`|`232.76ns - 1.37μs`|
|two object buckets|`524288`|`85.77ns ± 856.44ps`|`123.35ns`|`56.22ns - 132.95ns`|`85.77ns ± 21.62ns`|`521.21ns`|`272.11ns - 561.06ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.81ns ± 588.6ps`|`67.33ns`|`33.76ns - 75.15ns`|`43.81ns ± 27.45ns`|`834.35ns`|`251.86ns - 1.13μs`|
|linked list map|`524288`|`87.66ns ± 1.02ns`|`124.67ns`|`73.51ns - 154.46ns`|`87.66ns ± 26.56ns`|`1.02μs`|`262.04ns - 1.13μs`|
|two object buckets|`524288`|`141.94ns ± 1.32ns`|`210.06ns`|`123.05ns - 214.98ns`|`141.94ns ± 18.92ns`|`506.24ns`|`274.38ns - 715.59ns`|
|map|`524288`|`218.2ns ± 2.31ns`|`365.34ns`|`160.09ns - 365.55ns`|`218.2ns ± 10.28ns`|`607.89ns`|`249.95ns - 856.54ns`|### capacity 4096

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`76.82ns ± 720.85ps`|`105.91ns`|`60.94ns - 113.4ns`|`76.82ns ± 31.28ns`|`638.81ns`|`359.63ns - 844.48ns`|
|linked list map|`524288`|`188.97ns ± 3.26ns`|`347.9ns`|`143.04ns - 357.57ns`|`188.97ns ± 24.41ns`|`705.02ns`|`339.14ns - 1.34μs`|
|two object buckets|`524288`|`215.55ns ± 3.9ns`|`305.47ns`|`175.48ns - 435.73ns`|`215.55ns ± 31.7ns`|`865.1ns`|`455.98ns - 895.9ns`|
|map|`524288`|`2.55μs ± 165.3ns`|`6.76μs`|`1μs - 6.86μs`|`2.55μs ± 180.52ns`|`739.56ns`|`399.79ns - 753.97ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`28.99ns ± 478.63ps`|`41.63ns`|`16.47ns - 42.55ns`|`28.99ns ± 52.17ns`|`917.59ns`|`503.75ns - 1.13μs`|
|map|`524288`|`53.91ns ± 480.08ps`|`66.04ns`|`43.89ns - 78.44ns`|`53.91ns ± 47.52ns`|`723.4ns`|`472.11ns - 1.24μs`|
|linked list map|`524288`|`55.4ns ± 1.12ns`|`93.92ns`|`35.57ns - 145.63ns`|`55.4ns ± 47.41ns`|`968.46ns`|`438.7ns - 1.03μs`|
|two object buckets|`524288`|`63.71ns ± 486.66ps`|`74.78ns`|`53.06ns - 88.75ns`|`63.71ns ± 45.9ns`|`913.86ns`|`434.94ns - 1.03μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`40.88ns ± 682.44ps`|`61.86ns`|`27.29ns - 80.12ns`|`40.88ns ± 59.54ns`|`1.08μs`|`536.13ns - 1.35μs`|
|map|`524288`|`51.28ns ± 526.72ps`|`69.61ns`|`40.85ns - 80.4ns`|`51.28ns ± 63.75ns`|`1.21μs`|`568.54ns - 1.28μs`|
|linked list map|`524288`|`55.99ns ± 759.17ps`|`81.19ns`|`39.33ns - 84.4ns`|`55.99ns ± 63.24ns`|`1.02μs`|`602.63ns - 1.15μs`|
|two object buckets|`524288`|`186.39ns ± 1.49ns`|`241.87ns`|`154.54ns - 282.48ns`|`186.39ns ± 51.42ns`|`1.09μs`|`581.74ns - 1.44μs`|## web apis
### Response

#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`372.37ns ± 4.15ns`|`591.77ns`|`299.75ns - 668.39ns`|
|new Headers().set()|`1048576`|`372.67ns ± 4.4ns`|`553.99ns`|`296.78ns - 899.66ns`|
|new Headers().append()|`1048576`|`378.21ns ± 4.23ns`|`540.73ns`|`297.04ns - 818.12ns`|
|header pairs|`1048576`|`414.13ns ± 4.55ns`|`650.27ns`|`343.6ns - 844.05ns`|
|new Headers(record)|`1048576`|`461.57ns ± 4.74ns`|`620.55ns`|`371.07ns - 1.21μs`|
|new Headers(pairs)|`1048576`|`548.98ns ± 4.74ns`|`719.4ns`|`437.13ns - 1.01μs`|
