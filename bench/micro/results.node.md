# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`414.65ps ± 11.73ps`|`325.2ps`|`317.87ps - 33.64ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`3.81ns ± 437.95ps`|`29.47ns`|`2ns - 35.22ns`|
|monomorphic array|`524288`|`5.5ns ± 743.77ps`|`34.12ns`|`1.77ns - 35.17ns`|
|monomorphic object|`524288`|`6.47ns ± 845.87ps`|`35.5ns`|`1.63ns - 38.99ns`|
|polymorphic object|`524288`|`19ns ± 1.1ns`|`35.63ns`|`3.32ns - 39.06ns`|
|megamorphic object|`524288`|`23.35ns ± 502.92ps`|`58.44ns`|`15.57ns - 61.44ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.5ns ± 522.62ps`|`26.19ns`|`1.95ns - 31.54ns`|
|monomorphic object|`524288`|`7.12ns ± 467.08ps`|`26.96ns`|`3.01ns - 32.53ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.88ns ± 260.51ps`|`17.8ns`|`7.92ns - 36.11ns`|
|prototype chain (override prototype)|`524288`|`12.98ns ± 181.3ps`|`16.7ns`|`11.19ns - 33.18ns`|
|prototype chain (create with prototype)|`524288`|`16.17ns ± 443.47ps`|`35.08ns`|`10.18ns - 45.91ns`|
|WeakMap store|`524288`|`17.94ns ± 436.6ps`|`30.26ns`|`12.07ns - 58.74ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`156.94ns ± 505.91ps`|`180.16ns`|`145.01ns - 182.12ns`|
|Object.create(null)|`524288`|`251.92ns ± 982.86ps`|`295.97ns`|`244.14ns - 340.96ns`|
|function constructor (freezed proto)|`524288`|`950.95ns ± 908.64ps`|`995.85ns`|`931.94ns - 1.01μs`|
|function constructor|`524288`|`954.15ns ± 7.36ns`|`1.44μs`|`926.18ns - 1.44μs`|
|object literal|`524288`|`989.66ns ± 5.99ns`|`1.22μs`|`943.48ns - 1.52μs`|
|object literal (computed properties)|`524288`|`995.28ns ± 14.15ns`|`1.59μs`|`890.64ns - 1.62μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`8.75ns ± 1.8ns`|`132.12ns`|`2.03ns - 145.13ns`|
|constructor|`524288`|`17.26ns ± 3.68ns`|`170.73ns`|`1.93ns - 226.72ns`|
|set prototype|`524288`|`18.56ns ± 2.39ns`|`152.14ns`|`1.96ns - 159.94ns`|
|Object.create()|`524288`|`42.89ns ± 2.77ns`|`92.06ns`|`1.98ns - 139.83ns`|
|object spread|`524288`|`99.05ns ± 886.59ps`|`126.32ns`|`58.41ns - 169.82ns`|
|Object.setPrototypeOf()|`524288`|`250.62ns ± 5.18ns`|`419.85ns`|`212.39ns - 458.1ns`|
|set __proto__|`524288`|`388.41ns ± 8.51ns`|`604.55ns`|`269.4ns - 623.7ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`78.09ns ± 875.29ps`|`130.83ns`|`65.64ns - 147.35ns`|
|Set|`1048576`|`167.81ns ± 684.14ps`|`197.41ns`|`133.32ns - 283.72ns`|
|Set direct assign|`1048576`|`183.58ns ± 950.44ps`|`221.55ns`|`170.85ns - 328.69ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`75.91ns ± 413.85ps`|`100.41ns`|`59.63ns - 120.31ns`|
|Set|`1048576`|`106.64ns ± 641.18ps`|`142.23ns`|`94.92ns - 155.51ns`|
|Set direct assign|`1048576`|`121.79ns ± 785.84ps`|`180.76ns`|`101.48ns - 226.91ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`154.05ns ± 1.24ns`|`225.97ns`|`137.04ns - 244.71ns`|
|Set|`1048576`|`187.78ns ± 1.23ns`|`304.84ns`|`166.48ns - 322.14ns`|
|Set direct assign|`1048576`|`197.02ns ± 820.88ps`|`233.85ns`|`181.44ns - 363.15ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`106.7ns ± 692.08ps`|`135.28ns`|`84.88ns - 147.71ns`|
|Set direct assign|`1048576`|`122.55ns ± 431.6ps`|`145.86ns`|`103.84ns - 152.87ns`|
|Array.includes()|`1048576`|`161.95ns ± 1.84ns`|`253.9ns`|`137.22ns - 295.37ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`209.43ns ± 1.27ns`|`247.41ns`|`194.77ns - 399.3ns`|
|Set direct assign|`1048576`|`221.55ns ± 610.49ps`|`257.57ns`|`199.76ns - 271.5ns`|
|Array.includes()|`1048576`|`252.17ns ± 1.66ns`|`386.5ns`|`236.54ns - 439.75ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`116.96ns ± 876.49ps`|`172.99ns`|`103.34ns - 185.42ns`|
|Set direct assign|`1048576`|`126.06ns ± 527.75ps`|`151.2ns`|`98.3ns - 186.52ns`|
|Array.includes()|`1048576`|`260.52ns ± 2.43ns`|`413.95ns`|`239.82ns - 414.88ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`185.01ns ± 1.41ns`|`309.41ns`|`164.98ns - 321.6ns`|
|Set direct assign|`1048576`|`287.8ns ± 2.53ns`|`426.01ns`|`262.63ns - 527.69ns`|
|Set|`1048576`|`354.03ns ± 1.63ns`|`489.84ns`|`311.25ns - 564.8ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`137.05ns ± 524.06ps`|`164.25ns`|`95.41ns - 174.66ns`|
|Set|`1048576`|`184.94ns ± 762.09ps`|`214.6ns`|`168.38ns - 301.8ns`|
|Array.includes()|`1048576`|`441.9ns ± 2.56ns`|`669.56ns`|`416.94ns - 793.34ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`158.07ns ± 2.24ns`|`251.54ns`|`138.08ns - 266.36ns`|
|Set|`524288`|`231.39ns ± 1.8ns`|`337.94ns`|`212.29ns - 399.19ns`|
|Set direct assign|`524288`|`259.37ns ± 2.47ns`|`402.01ns`|`215.34ns - 422.44ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`159.78ns ± 1.44ns`|`243.19ns`|`137.44ns - 274.38ns`|
|Set direct assign|`524288`|`183.12ns ± 1.38ns`|`261.1ns`|`143.51ns - 276.67ns`|
|Array.includes()|`524288`|`248.88ns ± 1.99ns`|`335.77ns`|`227.98ns - 397.02ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`200.05ns ± 740.13ps`|`225.46ns`|`187.41ns - 225.94ns`|
|Set direct assign|`524288`|`280.92ns ± 1.05ns`|`331.7ns`|`268.54ns - 336.35ns`|
|Set|`524288`|`281.45ns ± 4.74ns`|`488.54ns`|`243.93ns - 494ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`166.19ns ± 1.01ns`|`186.82ns`|`155.38ns - 260.45ns`|
|Set direct assign|`524288`|`187.74ns ± 1.46ns`|`278.24ns`|`173.78ns - 300.15ns`|
|Array.includes()|`524288`|`502.65ns ± 4.83ns`|`893.8ns`|`485.6ns - 904.67ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`346.4ns ± 4.27ns`|`639.11ns`|`317.86ns - 640.46ns`|
|Set|`524288`|`398.19ns ± 2.92ns`|`619.17ns`|`379.8ns - 638.54ns`|
|Array.includes()|`524288`|`976.29ns ± 6.48ns`|`1.29μs`|`946.39ns - 1.56μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`199.31ns ± 2.04ns`|`337.04ns`|`171.45ns - 341.76ns`|
|Set|`524288`|`234.87ns ± 1.71ns`|`339.58ns`|`214.89ns - 341.33ns`|
|Array.includes()|`524288`|`977.93ns ± 10.33ns`|`1.75μs`|`943.55ns - 1.86μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`574.11ns ± 4.03ns`|`695.32ns`|`534.54ns - 1.05μs`|
|Set|`524288`|`602.44ns ± 1.85ns`|`679.38ns`|`583.29ns - 787.03ns`|
|Array.includes()|`524288`|`884.58ns ± 5.82ns`|`1.22μs`|`858.62ns - 1.23μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`308.89ns ± 1.31ns`|`356.84ns`|`288.76ns - 407.43ns`|
|Set|`524288`|`360.6ns ± 5.41ns`|`554.33ns`|`308.31ns - 591.35ns`|
|Array.includes()|`524288`|`885.73ns ± 8.67ns`|`1.61μs`|`858.02ns - 1.65μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`720.19ns ± 24.45ns`|`1.37μs`|`667.14ns - 1.37μs`|
|Set|`131072`|`726.26ns ± 10.43ns`|`928.35ns`|`672.92ns - 928.35ns`|
|Array.includes()|`131072`|`1.05μs ± 14.7ns`|`1.51μs`|`1.02μs - 1.51μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`565.15ns ± 15.12ns`|`1μs`|`517.64ns - 1μs`|
|Set direct assign|`131072`|`569.39ns ± 18.3ns`|`1.06μs`|`533.26ns - 1.06μs`|
|Array.includes()|`131072`|`4μs ± 33.38ns`|`4.37μs`|`3.62μs - 4.37μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`925.37ns ± 7.45ns`|`1.14μs`|`906.96ns - 1.14μs`|
|Set direct assign|`131072`|`927.97ns ± 4.05ns`|`1.01μs`|`909.15ns - 1.01μs`|
|Array.includes()|`131072`|`4.63μs ± 35.05ns`|`4.98μs`|`4.2μs - 4.98μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`677.3ns ± 17.95ns`|`1.21μs`|`644.43ns - 1.21μs`|
|Set direct assign|`131072`|`729.41ns ± 20.41ns`|`1.28μs`|`641.61ns - 1.28μs`|
|Array.includes()|`131072`|`4.6μs ± 42.43ns`|`4.96μs`|`4.18μs - 4.96μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.31μs ± 1.99ns`|`1.35μs`|`1.3μs - 1.35μs`|
|Set direct assign|`131072`|`1.45μs ± 12.17ns`|`1.59μs`|`1.36μs - 1.59μs`|
|Array.includes()|`131072`|`3.01μs ± 34ns`|`3.43μs`|`2.83μs - 3.43μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`844.19ns ± 15.83ns`|`1.26μs`|`803.52ns - 1.26μs`|
|Set direct assign|`131072`|`856.61ns ± 24.55ns`|`1.63μs`|`817.91ns - 1.63μs`|
|Array.includes()|`131072`|`6.39μs ± 37.88ns`|`6.76μs`|`5.93μs - 6.76μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.23μs ± 12.47ns`|`2.33μs`|`2.13μs - 2.33μs`|
|Set|`131072`|`2.25μs ± 21.41ns`|`2.53μs`|`2.1μs - 2.53μs`|
|Array.includes()|`131072`|`17.19μs ± 33.14ns`|`17.53μs`|`16.91μs - 17.53μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.17μs ± 31.82ns`|`2.17μs`|`1.1μs - 2.17μs`|
|Set direct assign|`131072`|`1.27μs ± 10.65ns`|`1.36μs`|`1.18μs - 1.36μs`|
|Array.includes()|`131072`|`17.15μs ± 24.73ns`|`17.35μs`|`16.92μs - 17.35μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`156.94ns ± 1.31ns`|`226.2ns`|`136.22ns - 229.34ns`|
|await non-promise|`524288`|`158.83ns ± 1.5ns`|`246.01ns`|`141.51ns - 269.63ns`|
|generator|`524288`|`189.42ns ± 2.08ns`|`284.43ns`|`164.92ns - 288.73ns`|
|async generator|`524288`|`1μs ± 25.2ns`|`2.18μs`|`542.17ns - 2.39μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.33μs ± 33.44ns`|`1.68μs`|`871.13ns - 1.68μs`|
|generator|`131072`|`2.19μs ± 32.59ns`|`3.12μs`|`2.1μs - 3.12μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`180.63ns ± 2.02ns`|`238.86ns`|`150.58ns - 258.87ns`|`180.63ns ± 102.64ns`|`1.46μs`|`1.22μs - 1.52μs`|
|map|`524288`|`225.29ns ± 2.75ns`|`295.48ns`|`186.54ns - 296.8ns`|`225.29ns ± 99.3ns`|`1.48μs`|`1.21μs - 1.5μs`|
|linked list map|`524288`|`279.34ns ± 3.12ns`|`375.73ns`|`238.82ns - 388.75ns`|`279.34ns ± 94.47ns`|`1.43μs`|`1.23μs - 1.46μs`|
|two object buckets|`524288`|`290.07ns ± 2.27ns`|`384.38ns`|`262.31ns - 430.13ns`|`290.07ns ± 90.81ns`|`1.42μs`|`1.22μs - 1.43μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.9ns ± 484.02ps`|`51.85ns`|`17.23ns - 61.28ns`|`24.9ns ± 127.09ns`|`1.55μs`|`1.36μs - 1.62μs`|
|linked list map|`524288`|`26.49ns ± 522.56ps`|`50.93ns`|`19.18ns - 63.48ns`|`26.49ns ± 126.52ns`|`1.59μs`|`1.36μs - 1.6μs`|
|two map buckets|`524288`|`36.65ns ± 473.11ps`|`51.91ns`|`24.76ns - 74ns`|`36.65ns ± 117.22ns`|`1.49μs`|`1.27μs - 1.53μs`|
|two object buckets|`524288`|`52.85ns ± 477.17ps`|`69.66ns`|`44.42ns - 84.03ns`|`52.85ns ± 115.41ns`|`1.59μs`|`1.25μs - 1.65μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`66.23ns ± 449.31ps`|`82.5ns`|`38.95ns - 93.89ns`|`66.23ns ± 116.99ns`|`1.51μs`|`1.27μs - 1.53μs`|
|two object buckets|`524288`|`101.21ns ± 420.39ps`|`122.81ns`|`94.96ns - 125.12ns`|`101.21ns ± 109.27ns`|`1.51μs`|`1.24μs - 2.04μs`|
|map|`524288`|`120.19ns ± 842.78ps`|`142.95ns`|`94.79ns - 143.06ns`|`120.19ns ± 104.48ns`|`1.41μs`|`1.2μs - 1.57μs`|
|linked list map|`524288`|`144.15ns ± 868.29ps`|`183.92ns`|`127.25ns - 198.45ns`|`144.15ns ± 106.19ns`|`1.44μs`|`1.24μs - 1.68μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`181.88ns ± 1.93ns`|`232.92ns`|`156.43ns - 258.58ns`|`181.88ns ± 105.22ns`|`1.52μs`|`1.27μs - 1.58μs`|
|map|`524288`|`241.37ns ± 2.61ns`|`360.57ns`|`207.87ns - 375.34ns`|`241.37ns ± 97.66ns`|`1.45μs`|`1.25μs - 1.72μs`|
|linked list map|`524288`|`278.44ns ± 3.04ns`|`366.1ns`|`235.47ns - 385.39ns`|`278.44ns ± 97.9ns`|`1.56μs`|`1.28μs - 1.6μs`|
|two object buckets|`524288`|`325.88ns ± 3.42ns`|`446.25ns`|`271ns - 512.77ns`|`325.88ns ± 93.33ns`|`1.5μs`|`1.25μs - 1.52μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`26.73ns ± 542.7ps`|`47.92ns`|`21.48ns - 71.25ns`|`26.73ns ± 126.87ns`|`1.63μs`|`1.26μs - 1.87μs`|
|linked list map|`524288`|`27.54ns ± 526.04ps`|`44.77ns`|`22.93ns - 72.76ns`|`27.54ns ± 128.16ns`|`1.64μs`|`1.38μs - 1.67μs`|
|two map buckets|`524288`|`45.44ns ± 534.47ps`|`70.76ns`|`36.78ns - 89.79ns`|`45.44ns ± 116.55ns`|`1.54μs`|`1.27μs - 1.57μs`|
|two object buckets|`524288`|`58.98ns ± 598.68ps`|`89.59ns`|`52.07ns - 101.28ns`|`58.98ns ± 117.75ns`|`1.74μs`|`1.27μs - 1.75μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`69.27ns ± 486.46ps`|`84.38ns`|`64.69ns - 107.28ns`|`69.27ns ± 116.37ns`|`1.55μs`|`1.28μs - 1.56μs`|
|two object buckets|`524288`|`95.63ns ± 468.3ps`|`113.63ns`|`89.7ns - 115.11ns`|`95.63ns ± 112.95ns`|`1.56μs`|`1.25μs - 1.56μs`|
|map|`524288`|`121.56ns ± 625.27ps`|`150.1ns`|`113ns - 171.98ns`|`121.56ns ± 112.7ns`|`1.51μs`|`1.27μs - 1.55μs`|
|linked list map|`524288`|`133.94ns ± 840.83ps`|`173.64ns`|`124.68ns - 188.7ns`|`133.94ns ± 111.34ns`|`1.64μs`|`1.29μs - 1.67μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`181.65ns ± 1.65ns`|`253.94ns`|`156.12ns - 263.66ns`|`181.65ns ± 104.66ns`|`1.49μs`|`1.25μs - 1.61μs`|
|two object buckets|`524288`|`274.97ns ± 998.22ps`|`307.34ns`|`256.27ns - 321.64ns`|`274.97ns ± 95.78ns`|`1.43μs`|`1.25μs - 1.45μs`|
|linked list map|`524288`|`275.79ns ± 2.59ns`|`348.55ns`|`231.18ns - 381.18ns`|`275.79ns ± 98.86ns`|`1.49μs`|`1.25μs - 1.52μs`|
|map|`524288`|`437.78ns ± 2.15ns`|`497.73ns`|`392.05ns - 503.14ns`|`437.78ns ± 84.67ns`|`1.59μs`|`1.29μs - 1.59μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`31.86ns ± 484.56ps`|`51.94ns`|`28.2ns - 76.7ns`|`31.86ns ± 129.47ns`|`2μs`|`1.32μs - 2.01μs`|
|map|`524288`|`37.68ns ± 479.08ps`|`51.12ns`|`33.16ns - 78.2ns`|`37.68ns ± 133.26ns`|`1.77μs`|`1.35μs - 1.86μs`|
|two map buckets|`524288`|`57.98ns ± 623.41ps`|`89.52ns`|`51.04ns - 98.12ns`|`57.98ns ± 121.47ns`|`1.61μs`|`1.32μs - 1.62μs`|
|two object buckets|`524288`|`67.46ns ± 536.53ps`|`99.69ns`|`61.06ns - 101.17ns`|`67.46ns ± 119.92ns`|`1.64μs`|`1.31μs - 1.67μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`66.74ns ± 393.1ps`|`76.71ns`|`63.75ns - 104.67ns`|`66.74ns ± 121.92ns`|`1.55μs`|`1.33μs - 1.64μs`|
|two object buckets|`524288`|`92.35ns ± 458.25ps`|`117.3ns`|`87.74ns - 128.86ns`|`92.35ns ± 117.95ns`|`1.58μs`|`1.31μs - 1.61μs`|
|linked list map|`524288`|`137.85ns ± 498.83ps`|`159.76ns`|`128.89ns - 170.52ns`|`137.85ns ± 117.67ns`|`1.61μs`|`1.32μs - 1.66μs`|
|map|`524288`|`284.71ns ± 777.49ps`|`334.16ns`|`277.44ns - 347.68ns`|`284.71ns ± 99.36ns`|`1.53μs`|`1.3μs - 1.56μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`194.75ns ± 2.04ns`|`261.17ns`|`165.13ns - 261.64ns`|`194.75ns ± 109.46ns`|`1.56μs`|`1.31μs - 1.57μs`|
|linked list map|`524288`|`316.84ns ± 4.01ns`|`491.21ns`|`273.88ns - 512.87ns`|`316.84ns ± 109ns`|`1.71μs`|`1.41μs - 1.78μs`|
|two object buckets|`524288`|`332.83ns ± 5.75ns`|`586.8ns`|`289.57ns - 589.22ns`|`332.83ns ± 110.04ns`|`1.71μs`|`1.44μs - 2.03μs`|
|map|`524288`|`1.84μs ± 3.21ns`|`1.95μs`|`1.78μs - 1.96μs`|`1.84μs ± 17.92ns`|`1.88μs`|`1.52μs - 2.07μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`28.89ns ± 543.42ps`|`59.63ns`|`25.62ns - 67.94ns`|`28.89ns ± 151.1ns`|`1.91μs`|`1.61μs - 1.96μs`|
|two map buckets|`524288`|`30.15ns ± 538.48ps`|`46.72ns`|`26.95ns - 83.71ns`|`30.15ns ± 141.78ns`|`1.75μs`|`1.5μs - 1.79μs`|
|linked list map|`524288`|`55.81ns ± 568.02ps`|`80.32ns`|`48.93ns - 93.48ns`|`55.81ns ± 142.56ns`|`1.87μs`|`1.51μs - 1.88μs`|
|map|`524288`|`130.3ns ± 722.27ps`|`154.87ns`|`90.45ns - 165.03ns`|`130.3ns ± 135.73ns`|`1.81μs`|`1.55μs - 1.82μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`45.58ns ± 448ps`|`73.22ns`|`41.16ns - 81.08ns`|`45.58ns ± 172.2ns`|`2.22μs`|`1.77μs - 2.23μs`|
|two object buckets|`524288`|`50.02ns ± 419.48ps`|`61.26ns`|`46.4ns - 85.28ns`|`50.02ns ± 156.43ns`|`2.02μs`|`1.67μs - 2.06μs`|
|linked list map|`524288`|`61.8ns ± 582.14ps`|`79.07ns`|`55.56ns - 108ns`|`61.8ns ± 153.5ns`|`2.46μs`|`1.56μs - 2.47μs`|
|map|`524288`|`125.93ns ± 684.61ps`|`157.22ns`|`114.22ns - 173.83ns`|`125.93ns ± 165.58ns`|`2.2μs`|`1.74μs - 2.21μs`|
# Web APIs
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|new Headers().append()|`1048576`|`1.27μs ± 8.36ns`|`1.97μs`|`1.21μs - 2.67μs`|
|headers record|`1048576`|`1.34μs ± 13.41ns`|`2.43μs`|`1.28μs - 3.21μs`|
|header pairs|`1048576`|`1.37μs ± 8.66ns`|`1.91μs`|`1.31μs - 3.16μs`|
|new Headers().set()|`1048576`|`1.48μs ± 11.39ns`|`2.21μs`|`1.42μs - 3.76μs`|
|new Headers(record)|`1048576`|`1.72μs ± 10.7ns`|`2.16μs`|`1.66μs - 3.97μs`|
|new Headers(pairs)|`1048576`|`1.79μs ± 10.27ns`|`2.47μs`|`1.72μs - 3.84μs`|

