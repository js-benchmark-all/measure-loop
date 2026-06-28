# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`422.04ps ± 15.47ps`|`437.74ps`|`317.87ps - 31.66ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`3.08ns ± 401.07ps`|`33.58ns`|`1.64ns - 33.64ns`|
|polymorphic array|`524288`|`3.95ns ± 534.52ps`|`33.04ns`|`2.05ns - 35ns`|
|polymorphic object|`524288`|`4.83ns ± 480.13ps`|`31.4ns`|`3.13ns - 35.43ns`|
|monomorphic object|`524288`|`5.86ns ± 781.82ps`|`35.49ns`|`1.77ns - 36.57ns`|
|megamorphic object|`524288`|`23.36ns ± 465.5ps`|`50.44ns`|`12.02ns - 56.84ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.58ns ± 496.74ps`|`26.03ns`|`1.95ns - 30.13ns`|
|monomorphic object|`524288`|`6.46ns ± 359.86ps`|`26.31ns`|`2.92ns - 29.22ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.53ns ± 185.82ps`|`23.38ns`|`7.88ns - 23.97ns`|
|prototype chain (override prototype)|`524288`|`13.07ns ± 324.07ps`|`28.04ns`|`11.19ns - 42.05ns`|
|prototype chain (create with prototype)|`524288`|`15.96ns ± 431.32ps`|`31.76ns`|`10.06ns - 35.15ns`|
|WeakMap store|`524288`|`17.09ns ± 378.16ps`|`26.7ns`|`12.2ns - 49.79ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function without constructor|`1048576`|`13.33ns ± 271.71ps`|`37.65ns`|`11.76ns - 51.91ns`|
|Object.create()|`1048576`|`13.79ns ± 262.4ps`|`38.15ns`|`7.3ns - 46.25ns`|
|function constructor|`1048576`|`13.84ns ± 406.94ps`|`42.52ns`|`6.8ns - 52.83ns`|
|class with constructor|`1048576`|`13.91ns ± 362.66ps`|`40.39ns`|`10.63ns - 46.93ns`|
|class without constructor|`1048576`|`14.06ns ± 353.33ps`|`42.3ns`|`11.89ns - 46.89ns`|
|class with default initializer, without constructor|`1048576`|`14.62ns ± 448.4ps`|`42.89ns`|`7.93ns - 46.8ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`151.51ns ± 965.61ps`|`180.73ns`|`140.03ns - 238.45ns`|
|Object.create(null)|`524288`|`266.5ns ± 2.97ns`|`428.45ns`|`241.54ns - 441.47ns`|
|function constructor|`524288`|`1.07μs ± 5.4ns`|`1.21μs`|`986.91ns - 1.22μs`|
|function constructor (freezed proto)|`524288`|`1.08μs ± 5.82ns`|`1.21μs`|`984.65ns - 1.21μs`|
|object literal (computed properties)|`524288`|`1.08μs ± 7.44ns`|`1.21μs`|`975.47ns - 1.73μs`|
|object literal|`524288`|`1.09μs ± 4.88ns`|`1.2μs`|`1.01μs - 1.22μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`12.35ns ± 2.93ns`|`166.68ns`|`1.65ns - 236.39ns`|
|function constructor|`524288`|`14.65ns ± 2.54ns`|`155.46ns`|`1.85ns - 166.76ns`|
|Object.create()|`524288`|`37.86ns ± 2.92ns`|`144.89ns`|`1.84ns - 154.04ns`|
|object spread|`524288`|`98.18ns ± 852.52ps`|`122ns`|`88.61ns - 177.64ns`|
|Object.setPrototypeOf()|`524288`|`226.92ns ± 2.58ns`|`423.15ns`|`212.52ns - 443.59ns`|
|set __proto__|`524288`|`273.47ns ± 5.47ns`|`422.89ns`|`188.2ns - 422.95ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`75.96ns ± 557.93ps`|`107.16ns`|`66.74ns - 120.2ns`|
|Set|`1048576`|`169.69ns ± 914.39ps`|`207.19ns`|`156.37ns - 296.51ns`|
|Set direct assign|`1048576`|`185.19ns ± 1.14ns`|`243.51ns`|`149.95ns - 361.72ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`76.76ns ± 395.06ps`|`96.91ns`|`68.44ns - 101.11ns`|
|Set|`1048576`|`106.69ns ± 490.6ps`|`131.55ns`|`96.43ns - 136.09ns`|
|Set direct assign|`1048576`|`121.44ns ± 586.04ps`|`155.08ns`|`101.51ns - 169.54ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`185.65ns ± 871.25ps`|`223.79ns`|`161.23ns - 331.54ns`|
|Set direct assign|`1048576`|`196.48ns ± 631.1ps`|`232.41ns`|`183.64ns - 244.76ns`|
|Array.includes()|`1048576`|`212.94ns ± 2.4ns`|`309.61ns`|`149.57ns - 318.69ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`109.27ns ± 666.16ps`|`156.86ns`|`97.59ns - 158.56ns`|
|Set direct assign|`1048576`|`124.97ns ± 864.11ps`|`187.7ns`|`111.96ns - 228.66ns`|
|Array.includes()|`1048576`|`176.71ns ± 1.59ns`|`241.66ns`|`147.83ns - 257.64ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`221.42ns ± 1.96ns`|`382.34ns`|`197.37ns - 386.52ns`|
|Set direct assign|`1048576`|`225.46ns ± 1.08ns`|`262.22ns`|`209.03ns - 379.52ns`|
|Array.includes()|`1048576`|`255.82ns ± 2.12ns`|`416.8ns`|`238.4ns - 433.74ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`115.5ns ± 711.17ps`|`162.41ns`|`104.36ns - 194.51ns`|
|Set direct assign|`1048576`|`127.47ns ± 671.92ps`|`169.48ns`|`107.17ns - 198.51ns`|
|Array.includes()|`1048576`|`247.33ns ± 616.28ps`|`281.89ns`|`237.37ns - 318.56ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`281.84ns ± 1.42ns`|`358.03ns`|`264.81ns - 519.21ns`|
|Set|`1048576`|`338.34ns ± 554.12ps`|`366.91ns`|`326.67ns - 417.87ns`|
|Array.includes()|`1048576`|`439.39ns ± 621.5ps`|`471.29ns`|`426.9ns - 508.07ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`136.23ns ± 667.22ps`|`168.38ns`|`96.67ns - 220.5ns`|
|Set|`1048576`|`187.28ns ± 530.53ps`|`216.81ns`|`148.96ns - 229.73ns`|
|Array.includes()|`1048576`|`445.21ns ± 2.67ns`|`728.29ns`|`426.36ns - 788.47ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`233.05ns ± 2.02ns`|`378.57ns`|`214.43ns - 411.24ns`|
|Array.includes()|`524288`|`248.59ns ± 2.08ns`|`406.76ns`|`232.12ns - 410.48ns`|
|Set direct assign|`524288`|`257.96ns ± 1.63ns`|`301.44ns`|`243.68ns - 420.89ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`164ns ± 1.82ns`|`249.57ns`|`140.34ns - 253.13ns`|
|Set direct assign|`524288`|`181.43ns ± 1.43ns`|`265.72ns`|`147.93ns - 298.33ns`|
|Array.includes()|`524288`|`250.1ns ± 2.32ns`|`406.76ns`|`231.69ns - 416.42ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`202.45ns ± 1.52ns`|`299.31ns`|`185.32ns - 326.33ns`|
|Set|`524288`|`268.82ns ± 3.71ns`|`478.83ns`|`249.09ns - 481.28ns`|
|Set direct assign|`524288`|`286.88ns ± 3.41ns`|`529.2ns`|`248.25ns - 530.11ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`168.82ns ± 1.34ns`|`266.25ns`|`147.87ns - 268.13ns`|
|Set direct assign|`524288`|`185.17ns ± 1.47ns`|`281.4ns`|`170.92ns - 312.14ns`|
|Array.includes()|`524288`|`523.37ns ± 8.61ns`|`1.05μs`|`483.01ns - 1.1μs`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`310.07ns ± 3.94ns`|`580.75ns`|`273.62ns - 597.08ns`|
|Set direct assign|`524288`|`340.03ns ± 2.77ns`|`455.93ns`|`321.12ns - 637.17ns`|
|Set|`524288`|`413.21ns ± 5.3ns`|`613.91ns`|`368.1ns - 620.13ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`201.06ns ± 2.06ns`|`296.99ns`|`168.99ns - 337.27ns`|
|Set|`524288`|`244.12ns ± 2.83ns`|`411.06ns`|`226.34ns - 432.16ns`|
|Array.includes()|`524288`|`963.58ns ± 3.83ns`|`1.26μs`|`944.38ns - 1.32μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`544.22ns ± 4.13ns`|`616.9ns`|`523.83ns - 1.05μs`|
|Set|`524288`|`592.54ns ± 1.89ns`|`629.34ns`|`575.95ns - 794.39ns`|
|Array.includes()|`524288`|`880.55ns ± 2.68ns`|`988.46ns`|`858.49ns - 1.18μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`305.04ns ± 1.18ns`|`340.41ns`|`288.12ns - 404.97ns`|
|Set|`524288`|`400.12ns ± 7.12ns`|`612.06ns`|`333.07ns - 629.91ns`|
|Array.includes()|`524288`|`886.76ns ± 8.6ns`|`1.51μs`|`857.22ns - 1.67μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`690.37ns ± 6.93ns`|`898.42ns`|`668.92ns - 898.42ns`|
|Set direct assign|`131072`|`758.39ns ± 12.79ns`|`916.49ns`|`671.99ns - 916.49ns`|
|Array.includes()|`131072`|`3.95μs ± 29.74ns`|`4.33μs`|`3.61μs - 4.33μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`571.03ns ± 17.98ns`|`1.06μs`|`531.96ns - 1.06μs`|
|Set|`131072`|`584.91ns ± 16.79ns`|`1μs`|`517.68ns - 1μs`|
|Array.includes()|`131072`|`4μs ± 37.77ns`|`4.34μs`|`3.61μs - 4.34μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`955.73ns ± 6.37ns`|`1.15μs`|`937ns - 1.15μs`|
|Set direct assign|`131072`|`1.07μs ± 10.19ns`|`1.18μs`|`969.93ns - 1.18μs`|
|Array.includes()|`131072`|`1.37μs ± 16.45ns`|`1.64μs`|`1.31μs - 1.64μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`716.03ns ± 6.02ns`|`895.25ns`|`675.04ns - 895.25ns`|
|Set direct assign|`131072`|`716.54ns ± 19.31ns`|`1.32μs`|`683.66ns - 1.32μs`|
|Array.includes()|`131072`|`4.83μs ± 32ns`|`5.21μs`|`4.51μs - 5.21μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.31μs ± 6.28ns`|`1.49μs`|`1.28μs - 1.49μs`|
|Set direct assign|`131072`|`1.42μs ± 11.25ns`|`1.54μs`|`1.34μs - 1.54μs`|
|Array.includes()|`131072`|`6.39μs ± 32.51ns`|`6.76μs`|`5.99μs - 6.76μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`862.21ns ± 23.02ns`|`1.54μs`|`801.29ns - 1.54μs`|
|Set direct assign|`131072`|`939.52ns ± 8.09ns`|`1.03μs`|`862.54ns - 1.03μs`|
|Array.includes()|`131072`|`6.48μs ± 73.01ns`|`8.5μs`|`6.02μs - 8.5μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.19μs ± 9.51ns`|`2.31μs`|`2.11μs - 2.31μs`|
|Set|`131072`|`2.25μs ± 21.85ns`|`2.47μs`|`2.1μs - 2.47μs`|
|Array.includes()|`131072`|`6.24μs ± 37.92ns`|`6.56μs`|`5.81μs - 6.56μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.16μs ± 6.55ns`|`1.34μs`|`1.12μs - 1.34μs`|
|Set direct assign|`131072`|`1.23μs ± 8.42ns`|`1.34μs`|`1.17μs - 1.34μs`|
|Array.includes()|`131072`|`17.34μs ± 36.53ns`|`18.09μs`|`17.02μs - 18.09μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`154.26ns ± 918.38ps`|`193.34ns`|`107.83ns - 216.94ns`|
|await non-promise|`524288`|`155.32ns ± 1.26ns`|`218.79ns`|`141.55ns - 267.18ns`|
|generator|`524288`|`186.04ns ± 1.31ns`|`282.85ns`|`172.71ns - 284.24ns`|
|async generator|`524288`|`961.17ns ± 24.22ns`|`2.36μs`|`484.83ns - 2.37μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.32μs ± 41.01ns`|`2.12μs`|`861.04ns - 2.12μs`|
|generator|`131072`|`2.11μs ± 13.54ns`|`2.53μs`|`2.08μs - 2.53μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`180.27ns ± 2.03ns`|`238.37ns`|`151.37ns - 270.88ns`|`180.27ns ± 98.95ns`|`1.42μs`|`1.2μs - 1.92μs`|
|map|`524288`|`244.82ns ± 3.89ns`|`347.2ns`|`181.46ns - 354.63ns`|`244.82ns ± 92.65ns`|`1.7μs`|`1.19μs - 1.73μs`|
|linked list map|`524288`|`285.34ns ± 3.42ns`|`376.12ns`|`223.47ns - 377.36ns`|`285.34ns ± 90.7ns`|`1.39μs`|`1.22μs - 1.5μs`|
|two object buckets|`524288`|`299.74ns ± 3ns`|`462.9ns`|`267.31ns - 509.58ns`|`299.74ns ± 90.04ns`|`1.38μs`|`1.21μs - 1.39μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.4ns ± 576.01ps`|`48.91ns`|`17.29ns - 70.84ns`|`24.4ns ± 124.89ns`|`1.53μs`|`1.34μs - 1.58μs`|
|linked list map|`524288`|`24.55ns ± 510.49ps`|`54.4ns`|`17.56ns - 60.22ns`|`24.55ns ± 122.54ns`|`1.55μs`|`1.32μs - 1.86μs`|
|two map buckets|`524288`|`37.2ns ± 524.54ps`|`51.25ns`|`30.33ns - 77.61ns`|`37.2ns ± 115.01ns`|`1.48μs`|`1.26μs - 1.5μs`|
|two object buckets|`524288`|`52.67ns ± 485.63ps`|`71.57ns`|`44.19ns - 83.83ns`|`52.67ns ± 112.59ns`|`1.45μs`|`1.25μs - 1.51μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.23ns ± 473.07ps`|`91.31ns`|`61.59ns - 100.95ns`|`65.23ns ± 112.01ns`|`1.43μs`|`1.24μs - 1.66μs`|
|two object buckets|`524288`|`101.03ns ± 393.81ps`|`116.05ns`|`94.54ns - 121.13ns`|`101.03ns ± 106.95ns`|`1.43μs`|`1.22μs - 1.53μs`|
|map|`524288`|`105.74ns ± 673.55ps`|`131.41ns`|`94ns - 143.16ns`|`105.74ns ± 107.16ns`|`1.43μs`|`1.21μs - 1.44μs`|
|linked list map|`524288`|`137.02ns ± 809.3ps`|`165.61ns`|`124.03ns - 196.53ns`|`137.02ns ± 105.94ns`|`1.45μs`|`1.22μs - 1.79μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`177.86ns ± 1.89ns`|`228.01ns`|`149.74ns - 243.88ns`|`177.86ns ± 99.25ns`|`1.39μs`|`1.22μs - 1.75μs`|
|linked list map|`524288`|`263.26ns ± 3.21ns`|`353.52ns`|`210.05ns - 354.15ns`|`263.26ns ± 92.17ns`|`1.37μs`|`1.21μs - 1.38μs`|
|map|`524288`|`287.09ns ± 2.89ns`|`358.66ns`|`242.23ns - 362.97ns`|`287.09ns ± 89.21ns`|`1.36μs`|`1.22μs - 1.37μs`|
|two object buckets|`524288`|`310.93ns ± 4.11ns`|`457.72ns`|`257.59ns - 494.66ns`|`310.93ns ± 88.21ns`|`1.39μs`|`1.22μs - 1.48μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`26.79ns ± 475.75ps`|`41.16ns`|`22.9ns - 69.43ns`|`26.79ns ± 126.23ns`|`1.55μs`|`1.36μs - 1.65μs`|
|map|`524288`|`26.93ns ± 524.44ps`|`47.1ns`|`20.78ns - 69.11ns`|`26.93ns ± 126.06ns`|`1.55μs`|`1.37μs - 1.64μs`|
|two map buckets|`524288`|`46.6ns ± 623.94ps`|`80.38ns`|`36.08ns - 81.41ns`|`46.6ns ± 114.19ns`|`1.49μs`|`1.26μs - 1.69μs`|
|two object buckets|`524288`|`58.11ns ± 543.85ps`|`73.75ns`|`50ns - 96.31ns`|`58.11ns ± 111.76ns`|`1.48μs`|`1.25μs - 1.52μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`68.41ns ± 454.77ps`|`85.97ns`|`64.29ns - 92.44ns`|`68.41ns ± 113.8ns`|`1.45μs`|`1.28μs - 1.48μs`|
|two object buckets|`524288`|`94.38ns ± 334.7ps`|`107.38ns`|`87.91ns - 109.38ns`|`94.38ns ± 108.28ns`|`1.45μs`|`1.23μs - 1.47μs`|
|map|`524288`|`123.45ns ± 751.9ps`|`149.71ns`|`112.04ns - 150.82ns`|`123.45ns ± 106.58ns`|`1.42μs`|`1.21μs - 1.45μs`|
|linked list map|`524288`|`129.37ns ± 619.8ps`|`158.14ns`|`120.14ns - 163.21ns`|`129.37ns ± 109.78ns`|`1.44μs`|`1.28μs - 1.51μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`179.6ns ± 1.64ns`|`246.83ns`|`149.15ns - 263.07ns`|`179.6ns ± 99.2ns`|`1.46μs`|`1.22μs - 1.46μs`|
|linked list map|`524288`|`243.06ns ± 1.47ns`|`328.92ns`|`222.55ns - 346.81ns`|`243.06ns ± 95.16ns`|`1.4μs`|`1.23μs - 1.42μs`|
|two object buckets|`524288`|`308.89ns ± 5.94ns`|`462.1ns`|`249.49ns - 465.64ns`|`308.89ns ± 90.74ns`|`1.58μs`|`1.23μs - 1.66μs`|
|map|`524288`|`423.04ns ± 3.92ns`|`571.94ns`|`372.45ns - 578.2ns`|`423.04ns ± 78.62ns`|`1.4μs`|`1.21μs - 1.42μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`31.53ns ± 488.08ps`|`47.64ns`|`28.17ns - 70.99ns`|`31.53ns ± 127.51ns`|`1.68μs`|`1.32μs - 1.72μs`|
|map|`524288`|`36.43ns ± 437.65ps`|`51.56ns`|`32.58ns - 74.63ns`|`36.43ns ± 127.29ns`|`1.57μs`|`1.36μs - 1.63μs`|
|two map buckets|`524288`|`55.91ns ± 471.72ps`|`78.32ns`|`49.58ns - 96.4ns`|`55.91ns ± 117.99ns`|`1.52μs`|`1.31μs - 1.52μs`|
|two object buckets|`524288`|`69.76ns ± 416.74ps`|`86.75ns`|`64.15ns - 101.95ns`|`69.76ns ± 116.34ns`|`1.52μs`|`1.3μs - 1.76μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`66.43ns ± 563.3ps`|`101.24ns`|`61.64ns - 107.52ns`|`66.43ns ± 118.11ns`|`1.52μs`|`1.31μs - 1.56μs`|
|two object buckets|`524288`|`91.81ns ± 621.27ps`|`126.67ns`|`85.87ns - 133.51ns`|`91.81ns ± 114.76ns`|`1.54μs`|`1.31μs - 1.61μs`|
|linked list map|`524288`|`135.66ns ± 663.08ps`|`159ns`|`127.28ns - 186.32ns`|`135.66ns ± 113.15ns`|`1.53μs`|`1.31μs - 1.86μs`|
|map|`524288`|`284.21ns ± 693.88ps`|`299.79ns`|`277.49ns - 360.87ns`|`284.21ns ± 95.21ns`|`1.43μs`|`1.28μs - 1.77μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`195.9ns ± 5.86ns`|`450.93ns`|`158.56ns - 485.31ns`|`195.9ns ± 113.12ns`|`1.61μs`|`1.38μs - 1.73μs`|
|linked list map|`524288`|`296.42ns ± 2.79ns`|`406.73ns`|`262.1ns - 413.16ns`|`296.42ns ± 112.92ns`|`1.78μs`|`1.47μs - 1.93μs`|
|two object buckets|`524288`|`319.03ns ± 2.69ns`|`483.75ns`|`282.99ns - 506.14ns`|`319.03ns ± 99.6ns`|`1.72μs`|`1.33μs - 1.83μs`|
|map|`524288`|`1.78μs ± 3.08ns`|`1.88μs`|`1.74μs - 1.89μs`|`1.78μs ± 30.44ns`|`1.55μs`|`1.33μs - 1.56μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`28.12ns ± 438.27ps`|`38.16ns`|`25.54ns - 72.63ns`|`28.12ns ± 138.9ns`|`1.86μs`|`1.5μs - 2.13μs`|
|two map buckets|`524288`|`30.48ns ± 483.12ps`|`45.69ns`|`27.28ns - 72.58ns`|`30.48ns ± 148.75ns`|`1.83μs`|`1.62μs - 1.9μs`|
|linked list map|`524288`|`50.94ns ± 497.78ps`|`70.09ns`|`47.33ns - 89.58ns`|`50.94ns ± 140.32ns`|`1.84μs`|`1.55μs - 1.85μs`|
|map|`524288`|`124.01ns ± 514.47ps`|`138.03ns`|`116.22ns - 166.37ns`|`124.01ns ± 132.71ns`|`1.75μs`|`1.51μs - 1.79μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`44.79ns ± 379.65ps`|`59.03ns`|`41.64ns - 77.78ns`|`44.79ns ± 148.26ns`|`1.84μs`|`1.61μs - 1.93μs`|
|two object buckets|`524288`|`52.27ns ± 428.06ps`|`65.27ns`|`48.84ns - 87.97ns`|`52.27ns ± 161.01ns`|`2.05μs`|`1.74μs - 2.11μs`|
|linked list map|`524288`|`59.56ns ± 430.3ps`|`71.02ns`|`46.97ns - 93.59ns`|`59.56ns ± 164.61ns`|`2.11μs`|`1.69μs - 2.14μs`|
|map|`524288`|`116.89ns ± 503.05ps`|`134.3ns`|`110.16ns - 155.85ns`|`116.89ns ± 137.25ns`|`1.91μs`|`1.52μs - 1.99μs`|

