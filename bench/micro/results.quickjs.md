# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`32.45ns ± 13.25ps`|`37.3ns`|`31.19ns - 54.97ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`57.61ns ± 204.11ps`|`62.64ns`|`54.34ns - 65.09ns`|
|megamorphic object|`524288`|`59.34ns ± 202.96ps`|`65.52ns`|`55.81ns - 66.74ns`|
|monomorphic array|`524288`|`59.73ns ± 158.28ps`|`63.35ns`|`55.44ns - 69.14ns`|
|polymorphic object|`524288`|`59.91ns ± 181.5ps`|`67.68ns`|`55.46ns - 68.03ns`|
|polymorphic array|`524288`|`60.01ns ± 138.27ps`|`66.13ns`|`58.35ns - 69.29ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`139.76ns ± 290.93ps`|`149.01ns`|`130.56ns - 151.35ns`|
|monomorphic object|`524288`|`188.67ns ± 222.19ps`|`197.92ns`|`184.08ns - 198.54ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (create with prototype)|`524288`|`90.83ns ± 136.94ps`|`97.06ns`|`88.49ns - 97.41ns`|
|direct assign|`524288`|`91.31ns ± 141.65ps`|`96.18ns`|`89.49ns - 98.51ns`|
|prototype chain (override prototype)|`524288`|`92.08ns ± 150.39ps`|`98.06ns`|`89.85ns - 99.98ns`|
|WeakMap store|`524288`|`139.41ns ± 353.94ps`|`151.44ns`|`131.56ns - 153.51ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`1048576`|`192.19ns ± 324.93ps`|`203.59ns`|`187.14ns - 265.37ns`|
|Object.create()|`1048576`|`199.09ns ± 231.38ps`|`207.16ns`|`191.55ns - 235.76ns`|
|function without constructor|`1048576`|`200.35ns ± 379.82ps`|`217.03ns`|`193.21ns - 243.02ns`|
|class with constructor|`1048576`|`302.57ns ± 201.73ps`|`312.58ns`|`297.17ns - 321.85ns`|
|class with default initializer, without constructor|`1048576`|`307.91ns ± 261.79ps`|`322.39ns`|`297.66ns - 323.6ns`|
|class without constructor|`1048576`|`317.64ns ± 341.37ps`|`327.96ns`|`311.22ns - 388.83ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`191.41ns ± 217.28ps`|`198.74ns`|`187.18ns - 207.69ns`|
|object literal (computed properties)|`524288`|`203.74ns ± 388.89ps`|`223.06ns`|`198.05ns - 232.61ns`|
|object literal|`524288`|`210.02ns ± 213.68ps`|`220.61ns`|`204.2ns - 222.49ns`|
|function constructor (freezed proto)|`524288`|`242.13ns ± 247.74ps`|`254.15ns`|`236.88ns - 257.75ns`|
|function constructor|`524288`|`242.58ns ± 411.15ps`|`266.47ns`|`238.49ns - 282.34ns`|
|Object.create(null)|`524288`|`258.83ns ± 241.13ps`|`266.83ns`|`252.39ns - 266.89ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|set __proto__|`524288`|`244.86ns ± 164.16ps`|`253.02ns`|`242.57ns - 254.74ns`|
|Object.setPrototypeOf()|`524288`|`280.17ns ± 255.96ps`|`294.11ns`|`276.09ns - 296.17ns`|
|function constructor|`524288`|`291.47ns ± 242.3ps`|`301.11ns`|`286.38ns - 301.88ns`|
|Object.create()|`524288`|`295.15ns ± 421.37ps`|`308.68ns`|`287.34ns - 335.25ns`|
|constructor|`524288`|`359.7ns ± 304.82ps`|`376.4ns`|`355.48ns - 376.55ns`|
|object spread|`524288`|`492.37ns ± 388.88ps`|`514.95ns`|`488.51ns - 515.88ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`816.32ns ± 739.06ps`|`845.1ns`|`795.95ns - 916.28ns`|
|Set direct assign|`1048576`|`955.7ns ± 339.75ps`|`973.08ns`|`947.87ns - 1.01μs`|
|Set|`1048576`|`1.05μs ± 1.14ns`|`1.08μs`|`1.03μs - 1.28μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`726.88ns ± 265.23ps`|`741.95ns`|`720.25ns - 761.49ns`|
|Set|`1048576`|`808.02ns ± 500.54ps`|`827.7ns`|`793.49ns - 844.08ns`|
|Array.includes()|`1048576`|`809.96ns ± 473.2ps`|`827.23ns`|`793.18ns - 830.04ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`908.21ns ± 564.03ps`|`930.61ns`|`887.17ns - 951.49ns`|
|Set direct assign|`1048576`|`1.06μs ± 529.35ps`|`1.09μs`|`1.05μs - 1.11μs`|
|Set|`1048576`|`1.15μs ± 759.45ps`|`1.18μs`|`1.12μs - 1.22μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`764.69ns ± 382.68ps`|`788.33ns`|`757.58ns - 804.62ns`|
|Set|`1048576`|`871.26ns ± 510.51ps`|`887.9ns`|`854.36ns - 893.45ns`|
|Array.includes()|`1048576`|`922.22ns ± 1.07ns`|`979.34ns`|`894.59ns - 1.02μs`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`1.13μs ± 1.81ns`|`1.17μs`|`1.09μs - 1.54μs`|
|Set direct assign|`1048576`|`1.24μs ± 572.18ps`|`1.27μs`|`1.23μs - 1.33μs`|
|Set|`1048576`|`1.31μs ± 490.57ps`|`1.34μs`|`1.3μs - 1.36μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`875.62ns ± 393.86ps`|`893.46ns`|`866.58ns - 927.45ns`|
|Set|`1048576`|`940.9ns ± 563.18ps`|`963.01ns`|`920.28ns - 992.41ns`|
|Array.includes()|`1048576`|`1.12μs ± 743.05ps`|`1.15μs`|`1.1μs - 1.18μs`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`1.41μs ± 1.02ns`|`1.46μs`|`1.39μs - 1.52μs`|
|Set direct assign|`1048576`|`1.53μs ± 604.87ps`|`1.55μs`|`1.51μs - 1.61μs`|
|Set|`1048576`|`1.61μs ± 805.25ps`|`1.64μs`|`1.59μs - 1.72μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`979.72ns ± 670.52ps`|`1μs`|`968.4ns - 1.08μs`|
|Set|`1048576`|`1.07μs ± 797.82ps`|`1.1μs`|`1.03μs - 1.16μs`|
|Array.includes()|`1048576`|`1.46μs ± 1.27ns`|`1.51μs`|`1.43μs - 1.51μs`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.44μs ± 928.74ps`|`1.47μs`|`1.43μs - 1.53μs`|
|Array.includes()|`524288`|`1.64μs ± 1.35ns`|`1.67μs`|`1.61μs - 1.75μs`|
|Set|`524288`|`1.71μs ± 768.81ps`|`1.74μs`|`1.69μs - 1.75μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.17μs ± 403.07ps`|`1.19μs`|`1.17μs - 1.19μs`|
|Set|`524288`|`1.43μs ± 1.37ns`|`1.47μs`|`1.41μs - 1.5μs`|
|Array.includes()|`524288`|`1.64μs ± 1.19ns`|`1.67μs`|`1.62μs - 1.73μs`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.67μs ± 1.41ns`|`1.76μs`|`1.65μs - 1.77μs`|
|Array.includes()|`524288`|`1.88μs ± 1.4ns`|`1.93μs`|`1.86μs - 1.97μs`|
|Set|`524288`|`1.95μs ± 1.15ns`|`1.99μs`|`1.93μs - 2.01μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.3μs ± 593.46ps`|`1.32μs`|`1.3μs - 1.37μs`|
|Set|`524288`|`1.57μs ± 1.07ns`|`1.6μs`|`1.55μs - 1.62μs`|
|Array.includes()|`524288`|`1.94μs ± 2.18ns`|`2.05μs`|`1.89μs - 2.09μs`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.95μs ± 989.03ps`|`1.98μs`|`1.93μs - 2.05μs`|
|Set|`524288`|`2.15μs ± 1.96ns`|`2.24μs`|`2.13μs - 2.35μs`|
|Array.includes()|`524288`|`2.52μs ± 1.61ns`|`2.57μs`|`2.46μs - 2.58μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.41μs ± 1.04ns`|`1.45μs`|`1.39μs - 1.47μs`|
|Set|`524288`|`1.64μs ± 1.42ns`|`1.67μs`|`1.6μs - 1.68μs`|
|Array.includes()|`524288`|`2.49μs ± 3.82ns`|`2.54μs`|`2.44μs - 2.92μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`2.54μs ± 983.72ps`|`2.58μs`|`2.52μs - 2.59μs`|
|Set|`524288`|`2.81μs ± 2.66ns`|`2.89μs`|`2.78μs - 3.11μs`|
|Array.includes()|`524288`|`3.07μs ± 2.14ns`|`3.13μs`|`3.02μs - 3.15μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`1.71μs ± 3.14ns`|`1.86μs`|`1.65μs - 2μs`|
|Set|`524288`|`1.93μs ± 862.84ps`|`1.97μs`|`1.91μs - 1.97μs`|
|Array.includes()|`524288`|`3.13μs ± 1.62ns`|`3.19μs`|`3.09μs - 3.2μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`4.46μs ± 6.32ns`|`4.63μs`|`4.44μs - 4.63μs`|
|Set|`131072`|`5.67μs ± 4.07ns`|`5.74μs`|`5.64μs - 5.74μs`|
|Array.includes()|`131072`|`8.27μs ± 17.42ns`|`8.77μs`|`8.16μs - 8.77μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`3.91μs ± 2.48ns`|`3.97μs`|`3.89μs - 3.97μs`|
|Set|`131072`|`5.09μs ± 2.93ns`|`5.15μs`|`5.07μs - 5.15μs`|
|Array.includes()|`131072`|`8.37μs ± 7.34ns`|`8.46μs`|`8.3μs - 8.46μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`5.05μs ± 3.32ns`|`5.1μs`|`5.02μs - 5.1μs`|
|Set|`131072`|`6.27μs ± 6.09ns`|`6.33μs`|`6.2μs - 6.33μs`|
|Array.includes()|`131072`|`10.29μs ± 10ns`|`10.56μs`|`10.22μs - 10.56μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`4.21μs ± 2.27ns`|`4.25μs`|`4.19μs - 4.25μs`|
|Set|`131072`|`5.46μs ± 2.13ns`|`5.49μs`|`5.44μs - 5.49μs`|
|Array.includes()|`131072`|`10.39μs ± 7.15ns`|`10.49μs`|`10.29μs - 10.49μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`6.59μs ± 3.98ns`|`6.64μs`|`6.54μs - 6.64μs`|
|Set|`131072`|`7.8μs ± 8.95ns`|`7.98μs`|`7.73μs - 7.98μs`|
|Array.includes()|`131072`|`14.8μs ± 8.77ns`|`14.97μs`|`14.74μs - 14.97μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`4.96μs ± 5.4ns`|`5.07μs`|`4.92μs - 5.07μs`|
|Set|`131072`|`6.26μs ± 3.43ns`|`6.32μs`|`6.23μs - 6.32μs`|
|Array.includes()|`131072`|`14.75μs ± 7.72ns`|`14.83μs`|`14.67μs - 14.83μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`9.2μs ± 8.36ns`|`9.28μs`|`9.13μs - 9.28μs`|
|Set|`131072`|`10.27μs ± 2.99ns`|`10.32μs`|`10.24μs - 10.32μs`|
|Array.includes()|`131072`|`24.39μs ± 23.97ns`|`24.81μs`|`24.22μs - 24.81μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`6.47μs ± 8.22ns`|`6.59μs`|`6.4μs - 6.59μs`|
|Set|`131072`|`7.43μs ± 3.92ns`|`7.48μs`|`7.38μs - 7.48μs`|
|Array.includes()|`131072`|`24.46μs ± 13.45ns`|`24.68μs`|`24.33μs - 24.68μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`1.01μs ± 610.93ps`|`1.05μs`|`1μs - 1.05μs`|
|generator|`524288`|`1.07μs ± 1.16ns`|`1.1μs`|`1.05μs - 1.11μs`|
|await non-promise|`524288`|`1.5μs ± 7.64ns`|`2.08μs`|`1.48μs - 2.22μs`|
|async generator|`524288`|`6.1μs ± 1.77μs`|`125.15μs`|`2.98μs - 186.56μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`12.28μs ± 23.06ns`|`12.5μs`|`11.93μs - 12.5μs`|
|generator|`131072`|`25.92μs ± 33.53ns`|`26.33μs`|`25.47μs - 26.33μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`305.18ns ± 330.2ps`|`322.95ns`|`300.82ns - 324.77ns`|`305.18ns ± 25.04ns`|`26.02ns`|`20.31ns - 34.29ns`|
|two map buckets|`524288`|`331.67ns ± 238.39ps`|`345.19ns`|`328.65ns - 350.96ns`|`331.67ns ± 27.36ns`|`27.32ns`|`20.7ns - 27.39ns`|
|map|`524288`|`584.29ns ± 738.78ps`|`613.08ns`|`578.16ns - 664.93ns`|`584.29ns ± 49.69ns`|`26ns`|`20.62ns - 26.43ns`|
|linked list map|`524288`|`610.6ns ± 474.69ps`|`633.59ns`|`603.55ns - 640.74ns`|`610.6ns ± 51.96ns`|`28.81ns`|`20.61ns - 32.04ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`152.5ns ± 790.24ps`|`170.83ns`|`144.62ns - 246.52ns`|`152.5ns ± 11.49ns`|`28.53ns`|`20.64ns - 39.07ns`|
|map|`524288`|`160.05ns ± 274.54ps`|`171.77ns`|`153.05ns - 175.4ns`|`160.05ns ± 12.21ns`|`24.94ns`|`20.48ns - 25.82ns`|
|two object buckets|`524288`|`174.71ns ± 394.06ps`|`186.73ns`|`166.32ns - 201.6ns`|`174.71ns ± 13.46ns`|`28.17ns`|`20.92ns - 29.25ns`|
|two map buckets|`524288`|`240.4ns ± 379.48ps`|`250.28ns`|`226.87ns - 253.99ns`|`240.4ns ± 19.3ns`|`26.13ns`|`20.66ns - 27.12ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`299.56ns ± 655.85ps`|`313.13ns`|`295.05ns - 377.55ns`|`299.56ns ± 24.46ns`|`26.77ns`|`21.53ns - 27.36ns`|
|two map buckets|`524288`|`335.24ns ± 188.89ps`|`343.14ns`|`331.1ns - 347.41ns`|`335.24ns ± 27.62ns`|`32.39ns`|`20.89ns - 33.39ns`|
|map|`524288`|`585.78ns ± 954.4ps`|`657.05ns`|`579.49ns - 671.3ns`|`585.78ns ± 49.78ns`|`26.65ns`|`20.76ns - 27.2ns`|
|linked list map|`524288`|`618.56ns ± 755.55ps`|`638.27ns`|`605.91ns - 692.46ns`|`618.56ns ± 52.65ns`|`29.3ns`|`20.99ns - 33.66ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`274.7ns ± 181.13ps`|`284.38ns`|`271.13ns - 287.24ns`|`274.7ns ± 22.25ns`|`26.24ns`|`21.68ns - 28.56ns`|
|two map buckets|`524288`|`320.8ns ± 194.76ps`|`326.9ns`|`316.72ns - 329.64ns`|`320.8ns ± 26.35ns`|`29.02ns`|`21.23ns - 30.4ns`|
|map|`524288`|`603.09ns ± 489.2ps`|`626.09ns`|`594.94ns - 639.45ns`|`603.09ns ± 51.16ns`|`27.76ns`|`22.72ns - 37.69ns`|
|linked list map|`524288`|`611.92ns ± 307.71ps`|`620.37ns`|`600.04ns - 622.38ns`|`611.92ns ± 51.96ns`|`29.48ns`|`22.47ns - 33.76ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`159.29ns ± 190.61ps`|`164.25ns`|`154.66ns - 175.77ns`|`159.29ns ± 11.82ns`|`36.68ns`|`23.62ns - 45.04ns`|
|map|`524288`|`164.13ns ± 160.57ps`|`167.75ns`|`159.58ns - 168.87ns`|`164.13ns ± 12.37ns`|`28.97ns`|`22.77ns - 29.11ns`|
|two object buckets|`524288`|`180.31ns ± 407.78ps`|`200.22ns`|`172.15ns - 208.6ns`|`180.31ns ± 13.73ns`|`29.73ns`|`23.61ns - 35.71ns`|
|two map buckets|`524288`|`251.98ns ± 323.26ps`|`266.38ns`|`242.38ns - 269.59ns`|`251.98ns ± 20.11ns`|`29ns`|`22.88ns - 30.86ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`268.32ns ± 364.13ps`|`283.7ns`|`262.14ns - 288.67ns`|`268.32ns ± 21.3ns`|`32.55ns`|`25.57ns - 34.69ns`|
|two map buckets|`524288`|`322.78ns ± 245.12ps`|`337.37ns`|`319.77ns - 337.55ns`|`322.78ns ± 26.15ns`|`30.82ns`|`25.02ns - 31.49ns`|
|linked list map|`524288`|`616.22ns ± 414.76ps`|`630.79ns`|`607.88ns - 633.76ns`|`616.22ns ± 52.16ns`|`30.7ns`|`24.43ns - 31.88ns`|
|map|`524288`|`714.04ns ± 1.1ns`|`735.24ns`|`584.97ns - 741.79ns`|`714.04ns ± 60.78ns`|`30.63ns`|`24.97ns - 31.03ns`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`276.02ns ± 444.88ps`|`295.81ns`|`267.27ns - 299.29ns`|`276.02ns ± 22ns`|`32.25ns`|`25.56ns - 36.26ns`|
|two map buckets|`524288`|`322.53ns ± 260.88ps`|`329.39ns`|`317.88ns - 338.24ns`|`322.53ns ± 25.4ns`|`39.13ns`|`33.43ns - 39.53ns`|
|map|`524288`|`597.01ns ± 478.2ps`|`617.19ns`|`590.95ns - 619.21ns`|`597.01ns ± 50.29ns`|`33.23ns`|`26.34ns - 33.75ns`|
|linked list map|`524288`|`617.65ns ± 758.02ps`|`633.26ns`|`610.14ns - 704.38ns`|`617.65ns ± 51.62ns`|`40.51ns`|`31.71ns - 41.66ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`188.28ns ± 197.23ps`|`196.61ns`|`182.5ns - 200.16ns`|`188.28ns ± 13.48ns`|`41.92ns`|`34.29ns - 42.26ns`|
|linked list map|`524288`|`190.1ns ± 196.9ps`|`193.85ns`|`185.34ns - 205.6ns`|`190.1ns ± 12.98ns`|`47.6ns`|`41.71ns - 47.87ns`|
|two object buckets|`524288`|`190.16ns ± 905.11ps`|`207.18ns`|`184.11ns - 299.81ns`|`190.16ns ± 12.88ns`|`49.88ns`|`41.96ns - 77.06ns`|
|two map buckets|`524288`|`278.52ns ± 305.31ps`|`289.13ns`|`271.99ns - 292.38ns`|`278.52ns ± 21.3ns`|`45.26ns`|`35.41ns - 46.55ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`252.32ns ± 562.54ps`|`272.78ns`|`246.18ns - 297.18ns`|`252.32ns ± 17.78ns`|`55.53ns`|`48.95ns - 56.75ns`|
|two map buckets|`524288`|`319.41ns ± 272.53ps`|`331.67ns`|`315.8ns - 331.76ns`|`319.41ns ± 23.62ns`|`59.05ns`|`49.96ns - 59.54ns`|
|map|`524288`|`593.89ns ± 470.31ps`|`617.03ns`|`588.82ns - 618.46ns`|`593.89ns ± 48.05ns`|`55.65ns`|`47.97ns - 56.14ns`|
|linked list map|`524288`|`623.03ns ± 553.83ps`|`643.63ns`|`612.68ns - 668.51ns`|`623.03ns ± 50.69ns`|`56.03ns`|`47.11ns - 68.83ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`307.32ns ± 1.27ns`|`373.95ns`|`294.76ns - 435.99ns`|`307.32ns ± 16.31ns`|`158.56ns`|`116.81ns - 186.73ns`|
|two map buckets|`524288`|`335.71ns ± 661.53ps`|`343.64ns`|`327.87ns - 409.65ns`|`335.71ns ± 23.45ns`|`78.57ns`|`64.45ns - 84.31ns`|
|map|`524288`|`626.39ns ± 487.47ps`|`651.08ns`|`618.53ns - 663.63ns`|`626.39ns ± 50.37ns`|`60.73ns`|`53.9ns - 61.11ns`|
|linked list map|`524288`|`656.02ns ± 372.89ps`|`671.9ns`|`646.45ns - 673.09ns`|`656.02ns ± 47.78ns`|`124.53ns`|`111.2ns - 124.92ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`129.26ns ± 204.7ps`|`137.24ns`|`125.28ns - 138.14ns`|`129.26ns ± 337.79ps`|`140.53ns`|`122.01ns - 145.41ns`|
|two map buckets|`524288`|`173.07ns ± 295.85ps`|`183.68ns`|`167.89ns - 184.86ns`|`173.07ns ± 3.02ns`|`147.73ns`|`133.66ns - 147.96ns`|
|map|`524288`|`346.92ns ± 339.93ps`|`358.71ns`|`340.41ns - 374.69ns`|`346.92ns ± 17.65ns`|`161.19ns`|`141.61ns - 165.06ns`|
|linked list map|`524288`|`393.3ns ± 751.96ps`|`415.4ns`|`379.78ns - 456.88ns`|`393.3ns ± 17.71ns`|`206.14ns`|`186.04ns - 211.54ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`160.83ns ± 223.27ps`|`168.74ns`|`155.28ns - 173.78ns`|`160.83ns ± 3.28ns`|`207.36ns`|`190.98ns - 207.47ns`|
|two map buckets|`524288`|`227.18ns ± 606.72ps`|`265.55ns`|`219.81ns - 277.85ns`|`227.18ns ± 1.57ns`|`222.81ns`|`201.91ns - 305.47ns`|
|map|`524288`|`303.58ns ± 327.51ps`|`319.19ns`|`298.41ns - 322.16ns`|`303.58ns ± 3.63ns`|`279.23ns`|`252.21ns - 287.72ns`|
|linked list map|`524288`|`403.68ns ± 639.47ps`|`421.72ns`|`391.1ns - 450.61ns`|`403.68ns ± 12.77ns`|`285.47ns`|`248.92ns - 302.46ns`|

