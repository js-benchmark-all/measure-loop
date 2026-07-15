# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`500.95ps ± 29.96ps`|`564.45ps`|`309.33ps - 280.62ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`7.12ns ± 838.41ps`|`34.27ns`|`2.06ns - 42.68ns`|
|polymorphic array|`524288`|`8.93ns ± 893.15ps`|`35.27ns`|`2.7ns - 39.87ns`|
|polymorphic object|`524288`|`9.51ns ± 829.8ps`|`40.69ns`|`4.53ns - 41.05ns`|
|monomorphic array|`524288`|`9.63ns ± 995.15ps`|`37.8ns`|`2.25ns - 39.4ns`|
|megamorphic object|`524288`|`24.41ns ± 585.84ps`|`52.98ns`|`12.75ns - 55.33ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.66ns ± 529.27ps`|`28.45ns`|`3.56ns - 35.18ns`|
|monomorphic object|`524288`|`11.5ns ± 457.42ps`|`32.43ns`|`6.89ns - 34.86ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.22ns ± 223.53ps`|`16.8ns`|`5.32ns - 33.03ns`|
|prototype chain (override prototype)|`524288`|`10.48ns ± 145.08ps`|`13.56ns`|`6.66ns - 26.37ns`|
|prototype chain (create with prototype)|`524288`|`14.01ns ± 288.81ps`|`32.02ns`|`8.68ns - 34.59ns`|
|WeakMap store|`524288`|`21.16ns ± 402.13ps`|`32.79ns`|`13.76ns - 36.59ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`114.33ns ± 1.33ns`|`197.79ns`|`101.21ns - 212.28ns`|
|Object.create(null)|`524288`|`273.1ns ± 1.97ns`|`297.43ns`|`265.14ns - 518.89ns`|
|object literal (computed properties)|`524288`|`915.98ns ± 4.48ns`|`1.08μs`|`880.93ns - 1.12μs`|
|function constructor (freezed proto)|`524288`|`992.21ns ± 5.87ns`|`1.14μs`|`940.81ns - 1.15μs`|
|function constructor|`524288`|`1.01μs ± 7.02ns`|`1.15μs`|`934.98ns - 1.15μs`|
|object literal|`524288`|`1.05μs ± 12.29ns`|`1.76μs`|`921.5ns - 1.89μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|set prototype|`524288`|`27.6ns ± 2.27ns`|`116.05ns`|`2.39ns - 123.57ns`|
|constructor|`524288`|`34.91ns ± 4.1ns`|`210.57ns`|`2.15ns - 222.53ns`|
|function constructor|`524288`|`38.04ns ± 4.15ns`|`148.52ns`|`2.23ns - 161.28ns`|
|Object.create()|`524288`|`66.67ns ± 3.7ns`|`167.45ns`|`2.34ns - 168.62ns`|
|Object.setPrototypeOf()|`524288`|`207.57ns ± 3.17ns`|`414.89ns`|`191.48ns - 465.69ns`|
|set __proto__|`524288`|`298.95ns ± 8.39ns`|`488.45ns`|`168.67ns - 488.74ns`|
|object spread|`524288`|`773.59ns ± 9.56ns`|`908.33ns`|`613.27ns - 939.28ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`52.18ns ± 332.61ps`|`65.25ns`|`30.78ns - 104.08ns`|
|Set|`1048576`|`157.22ns ± 1.69ns`|`286.51ns`|`134.08ns - 290.68ns`|
|Set direct assign|`1048576`|`160.71ns ± 360.73ps`|`179.13ns`|`145.24ns - 186.53ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`55.11ns ± 635.97ps`|`94ns`|`37.04ns - 100.64ns`|
|Set|`1048576`|`83.27ns ± 301.99ps`|`102.16ns`|`59.28ns - 107.78ns`|
|Set direct assign|`1048576`|`100.27ns ± 282.91ps`|`117.74ns`|`90.32ns - 120.27ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`77.89ns ± 642.96ps`|`126.59ns`|`68.45ns - 132.98ns`|
|Set|`1048576`|`180.5ns ± 2.55ns`|`314.06ns`|`136.9ns - 318.97ns`|
|Set direct assign|`1048576`|`189.83ns ± 2.39ns`|`297.34ns`|`160.91ns - 363.78ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`88.7ns ± 245.25ps`|`97.22ns`|`81.51ns - 107.09ns`|
|Set direct assign|`1048576`|`105.78ns ± 761.56ps`|`172.26ns`|`81.5ns - 187.37ns`|
|Array.includes()|`1048576`|`137.68ns ± 1.47ns`|`229.15ns`|`117.32ns - 233.55ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`190.08ns ± 1.15ns`|`245.65ns`|`166.42ns - 366.64ns`|
|Set direct assign|`1048576`|`207.42ns ± 1.82ns`|`362.92ns`|`189.48ns - 416.2ns`|
|Array.includes()|`1048576`|`239.43ns ± 1.66ns`|`411.88ns`|`213.58ns - 424.95ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`97.37ns ± 563.09ps`|`121.03ns`|`81.11ns - 171.5ns`|
|Set direct assign|`1048576`|`108.01ns ± 506.1ps`|`128.98ns`|`91.78ns - 197.16ns`|
|Array.includes()|`1048576`|`241.61ns ± 1.74ns`|`424.82ns`|`226.98ns - 432.08ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`153.57ns ± 635.28ps`|`179.14ns`|`142.77ns - 250.94ns`|
|Set direct assign|`1048576`|`261.4ns ± 2.04ns`|`412.6ns`|`242.86ns - 512.26ns`|
|Set|`1048576`|`321.85ns ± 4.02ns`|`591.3ns`|`283ns - 698.17ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`117.55ns ± 826.14ps`|`209.12ns`|`102.47ns - 221.31ns`|
|Set|`1048576`|`164.39ns ± 1.45ns`|`297.48ns`|`149.33ns - 299.88ns`|
|Array.includes()|`1048576`|`584.71ns ± 7.32ns`|`707.44ns`|`445.34ns - 724.95ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`224.02ns ± 3.06ns`|`416.25ns`|`189.48ns - 417.34ns`|
|Set direct assign|`524288`|`237.2ns ± 3.68ns`|`475.53ns`|`212.08ns - 475.8ns`|
|Array.includes()|`524288`|`239.41ns ± 3.26ns`|`417.39ns`|`218.23ns - 419.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`142.56ns ± 1.46ns`|`243.18ns`|`131.07ns - 259.54ns`|
|Set direct assign|`524288`|`154.72ns ± 456.13ps`|`176.68ns`|`141.99ns - 178.07ns`|
|Array.includes()|`524288`|`238.05ns ± 3.05ns`|`416.55ns`|`204.45ns - 434.82ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`170.99ns ± 1.65ns`|`309.19ns`|`146.77ns - 319.96ns`|
|Set|`524288`|`248.44ns ± 1.38ns`|`313.82ns`|`230.98ns - 324.39ns`|
|Set direct assign|`524288`|`271.03ns ± 3.95ns`|`535.91ns`|`239.2ns - 539.94ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`159.87ns ± 2.23ns`|`276.61ns`|`143.35ns - 286.86ns`|
|Set direct assign|`524288`|`209.55ns ± 3.42ns`|`271.54ns`|`168.53ns - 272.54ns`|
|Array.includes()|`524288`|`602.5ns ± 10.71ns`|`783.99ns`|`488.38ns - 883.35ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`278.71ns ± 4.27ns`|`511.89ns`|`246.74ns - 512.77ns`|
|Set direct assign|`524288`|`310.94ns ± 1.72ns`|`413.35ns`|`282.09ns - 450.15ns`|
|Set|`524288`|`362.65ns ± 4.56ns`|`649.66ns`|`336.32ns - 786.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`182.94ns ± 3ns`|`332.94ns`|`160.33ns - 334.54ns`|
|Set|`524288`|`208.35ns ± 614.44ps`|`234.31ns`|`184.89ns - 236.68ns`|
|Array.includes()|`524288`|`1.02μs ± 2.26ns`|`1.08μs`|`995.36ns - 1.27μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`557.98ns ± 4.07ns`|`765.67ns`|`503.3ns - 795.46ns`|
|Set|`524288`|`586.42ns ± 8.33ns`|`993.83ns`|`534.72ns - 1.29μs`|
|Array.includes()|`524288`|`898.02ns ± 5.34ns`|`1.15μs`|`880.3ns - 1.52μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`274.66ns ± 1.3ns`|`354.07ns`|`249.47ns - 364.85ns`|
|Set|`524288`|`338.39ns ± 6.82ns`|`613.84ns`|`291.94ns - 649.93ns`|
|Array.includes()|`524288`|`893.86ns ± 1.26ns`|`972.86ns`|`880.1ns - 975.93ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`710.75ns ± 25.93ns`|`1.33μs`|`645.82ns - 1.33μs`|
|Set direct assign|`131072`|`747.76ns ± 15.1ns`|`850.9ns`|`653.88ns - 850.9ns`|
|Array.includes()|`131072`|`4.28μs ± 38.68ns`|`4.53μs`|`3.9μs - 4.53μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`525.5ns ± 16.84ns`|`1.05μs`|`493.74ns - 1.05μs`|
|Set|`131072`|`551.35ns ± 19.29ns`|`1.01μs`|`503.57ns - 1.01μs`|
|Array.includes()|`131072`|`4.32μs ± 39.25ns`|`4.53μs`|`3.89μs - 4.53μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`891.07ns ± 10.39ns`|`1.08μs`|`841.8ns - 1.08μs`|
|Set direct assign|`131072`|`983.69ns ± 16.05ns`|`1.13μs`|`865.59ns - 1.13μs`|
|Array.includes()|`131072`|`1.23μs ± 4.84ns`|`1.38μs`|`1.21μs - 1.38μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`621.6ns ± 5.46ns`|`784.06ns`|`600.59ns - 784.06ns`|
|Set direct assign|`131072`|`732.46ns ± 11.24ns`|`823.75ns`|`628.05ns - 823.75ns`|
|Array.includes()|`131072`|`4.71μs ± 39.33ns`|`5.03μs`|`4.44μs - 5.03μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.37μs ± 14.23ns`|`1.52μs`|`1.27μs - 1.52μs`|
|Set|`131072`|`1.49μs ± 28.13ns`|`1.83μs`|`1.22μs - 1.83μs`|
|Array.includes()|`131072`|`6.36μs ± 39.23ns`|`6.64μs`|`5.94μs - 6.64μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`742.78ns ± 2.1ns`|`793.03ns`|`734.11ns - 793.03ns`|
|Set direct assign|`131072`|`863.97ns ± 15ns`|`1.13μs`|`768.23ns - 1.13μs`|
|Array.includes()|`131072`|`6.36μs ± 40.73ns`|`6.69μs`|`6.09μs - 6.69μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.14μs ± 13.79ns`|`2.3μs`|`2.05μs - 2.3μs`|
|Set|`131072`|`2.2μs ± 26.35ns`|`2.45μs`|`2.07μs - 2.45μs`|
|Array.includes()|`131072`|`18.3μs ± 25.41ns`|`18.72μs`|`18.07μs - 18.72μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.17μs ± 11.24ns`|`1.27μs`|`1.06μs - 1.27μs`|
|Set|`131072`|`1.26μs ± 29.67ns`|`1.68μs`|`1.09μs - 1.68μs`|
|Array.includes()|`131072`|`18.35μs ± 34.76ns`|`18.74μs`|`18.05μs - 18.74μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`95.05ns ± 605.8ps`|`120.65ns`|`66.04ns - 122.78ns`|
|await promise|`524288`|`129.83ns ± 940.65ps`|`183.16ns`|`119.31ns - 189.46ns`|
|await non-promise|`524288`|`148.38ns ± 1.51ns`|`211.29ns`|`111.2ns - 257.62ns`|
|async generator|`524288`|`884.13ns ± 10.43ns`|`1.35μs`|`760.82ns - 1.43μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.39μs ± 27.72ns`|`1.95μs`|`1.14μs - 1.95μs`|
|generator|`131072`|`2.15μs ± 36.93ns`|`3.15μs`|`2.04μs - 3.15μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`164.76ns ± 1.39ns`|`255.47ns`|`142.81ns - 256.39ns`|`164.76ns ± 83.45ns`|`1.22μs`|`1.07μs - 1.24μs`|
|map|`524288`|`202.44ns ± 3.3ns`|`346.89ns`|`181.58ns - 347.2ns`|`202.44ns ± 80.03ns`|`1.4μs`|`1.06μs - 1.47μs`|
|linked list map|`524288`|`232.47ns ± 1.53ns`|`297.43ns`|`215.99ns - 405.02ns`|`232.47ns ± 79.23ns`|`1.42μs`|`1.07μs - 1.46μs`|
|two object buckets|`524288`|`284.74ns ± 3.79ns`|`510.86ns`|`257.46ns - 532.63ns`|`284.74ns ± 72.91ns`|`1.24μs`|`1.06μs - 1.33μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`25.2ns ± 351.96ps`|`35.57ns`|`17.19ns - 55.59ns`|`25.2ns ± 107ns`|`1.43μs`|`1.14μs - 1.44μs`|
|linked list map|`524288`|`26.2ns ± 479.72ps`|`63.56ns`|`17.53ns - 63.86ns`|`26.2ns ± 108.57ns`|`1.65μs`|`1.13μs - 1.85μs`|
|two map buckets|`524288`|`36.71ns ± 458.54ps`|`60.34ns`|`23ns - 79.1ns`|`36.71ns ± 101.65ns`|`1.7μs`|`1.11μs - 1.96μs`|
|two object buckets|`524288`|`47.67ns ± 288.63ps`|`54.38ns`|`40.38ns - 69.4ns`|`47.67ns ± 99.1ns`|`1.6μs`|`1.09μs - 1.63μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`62.46ns ± 410.07ps`|`74.69ns`|`38.46ns - 88.68ns`|`62.46ns ± 97.23ns`|`1.32μs`|`1.1μs - 2.06μs`|
|two object buckets|`524288`|`91.5ns ± 543.7ps`|`120.73ns`|`86.18ns - 123.69ns`|`91.5ns ± 95.54ns`|`1.85μs`|`1.1μs - 1.99μs`|
|map|`524288`|`99.75ns ± 1.18ns`|`161.68ns`|`88.09ns - 184.34ns`|`99.75ns ± 94.73ns`|`1.6μs`|`1.09μs - 2.19μs`|
|linked list map|`524288`|`132.29ns ± 1.01ns`|`179.44ns`|`121.47ns - 188.16ns`|`132.29ns ± 91.51ns`|`1.3μs`|`1.05μs - 1.32μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`189.76ns ± 1.24ns`|`278.25ns`|`173.88ns - 287.54ns`|`189.76ns ± 84.36ns`|`1.28μs`|`1.09μs - 1.39μs`|
|linked list map|`524288`|`257.81ns ± 1.86ns`|`408.42ns`|`245.62ns - 408.97ns`|`257.81ns ± 79.91ns`|`1.4μs`|`1.04μs - 1.45μs`|
|map|`524288`|`285.75ns ± 4.09ns`|`416.05ns`|`252.87ns - 443.32ns`|`285.75ns ± 75.33ns`|`1.26μs`|`1.08μs - 1.48μs`|
|two object buckets|`524288`|`313.05ns ± 3.29ns`|`411.13ns`|`279.47ns - 411.15ns`|`313.05ns ± 73.68ns`|`1.27μs`|`1.09μs - 1.3μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`29.02ns ± 438.23ps`|`58.46ns`|`24.3ns - 70.97ns`|`29.02ns ± 105.33ns`|`1.39μs`|`1.16μs - 1.42μs`|
|linked list map|`524288`|`32.04ns ± 323.47ps`|`57.44ns`|`26.77ns - 60.62ns`|`32.04ns ± 104.38ns`|`1.35μs`|`1.15μs - 1.64μs`|
|two map buckets|`524288`|`47.15ns ± 396.26ps`|`68.33ns`|`36.17ns - 78.36ns`|`47.15ns ± 99.71ns`|`1.32μs`|`1.12μs - 1.38μs`|
|two object buckets|`524288`|`54.22ns ± 427.85ps`|`76.98ns`|`47.28ns - 91.87ns`|`54.22ns ± 98.06ns`|`1.34μs`|`1.11μs - 1.89μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.47ns ± 285.28ps`|`75.26ns`|`58ns - 87ns`|`65.47ns ± 95.93ns`|`1.3μs`|`1.11μs - 1.37μs`|
|two object buckets|`524288`|`88.53ns ± 513.21ps`|`108.37ns`|`82.22ns - 136.26ns`|`88.53ns ± 93.63ns`|`1.27μs`|`1.11μs - 1.34μs`|
|map|`524288`|`122.73ns ± 1.24ns`|`169.16ns`|`110.62ns - 171.83ns`|`122.73ns ± 90.3ns`|`1.27μs`|`1.1μs - 1.43μs`|
|linked list map|`524288`|`125.81ns ± 648.44ps`|`158.13ns`|`116.36ns - 158.79ns`|`125.81ns ± 91.93ns`|`1.28μs`|`1.12μs - 1.4μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`172.93ns ± 2.82ns`|`281.4ns`|`140.56ns - 319.3ns`|`172.93ns ± 89.89ns`|`1.44μs`|`1.14μs - 1.76μs`|
|linked list map|`524288`|`226.06ns ± 1.07ns`|`263.22ns`|`201.41ns - 269.59ns`|`226.06ns ± 85.22ns`|`1.34μs`|`1.14μs - 1.61μs`|
|two object buckets|`524288`|`266.5ns ± 3.5ns`|`438.79ns`|`230.59ns - 502.16ns`|`266.5ns ± 79.67ns`|`1.3μs`|`1.12μs - 1.3μs`|
|map|`524288`|`449.5ns ± 5.4ns`|`600.36ns`|`378.59ns - 622.17ns`|`449.5ns ± 61.82ns`|`1.36μs`|`1.1μs - 1.46μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`32.63ns ± 433.1ps`|`64.72ns`|`21.98ns - 70.17ns`|`32.63ns ± 111.13ns`|`1.4μs`|`1.21μs - 1.48μs`|
|map|`524288`|`38.28ns ± 359.16ps`|`52.67ns`|`28.87ns - 73.46ns`|`38.28ns ± 107.35ns`|`1.43μs`|`1.16μs - 1.45μs`|
|two map buckets|`524288`|`57.53ns ± 386.92ps`|`84.7ns`|`42.52ns - 85.05ns`|`57.53ns ± 100.95ns`|`1.36μs`|`1.15μs - 1.37μs`|
|two object buckets|`524288`|`64.23ns ± 449.52ps`|`94.24ns`|`59.42ns - 103.9ns`|`64.23ns ± 99.62ns`|`1.3μs`|`1.14μs - 1.31μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`67.96ns ± 228.13ps`|`73.65ns`|`65.13ns - 87.83ns`|`67.96ns ± 104.9ns`|`1.4μs`|`1.19μs - 1.68μs`|
|two object buckets|`524288`|`88.2ns ± 605.32ps`|`125.41ns`|`82.68ns - 131ns`|`88.2ns ± 99.49ns`|`1.34μs`|`1.06μs - 1.39μs`|
|linked list map|`524288`|`128.4ns ± 658.38ps`|`155.28ns`|`100.65ns - 177.35ns`|`128.4ns ± 97.91ns`|`1.48μs`|`1.16μs - 1.48μs`|
|map|`524288`|`285.3ns ± 1.43ns`|`367.63ns`|`255.73ns - 381.7ns`|`285.3ns ± 84.67ns`|`1.41μs`|`1.17μs - 1.64μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`212.91ns ± 4.76ns`|`400.83ns`|`166.12ns - 424.2ns`|`212.91ns ± 100.95ns`|`1.58μs`|`1.28μs - 1.75μs`|
|linked list map|`524288`|`303.21ns ± 8.04ns`|`714.95ns`|`234.18ns - 715.43ns`|`303.21ns ± 106.59ns`|`1.71μs`|`1.44μs - 1.83μs`|
|two object buckets|`524288`|`312.31ns ± 3.14ns`|`445.03ns`|`267.15ns - 446.56ns`|`312.31ns ± 91.3ns`|`1.53μs`|`1.22μs - 1.55μs`|
|map|`524288`|`1.72μs ± 6.44ns`|`1.88μs`|`1.64μs - 1.97μs`|`1.72μs ± 39.46ns`|`1.39μs`|`1.19μs - 1.47μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`26.88ns ± 428.12ps`|`35.5ns`|`24.24ns - 75.21ns`|`26.88ns ± 139.3ns`|`1.82μs`|`1.53μs - 1.94μs`|
|two map buckets|`524288`|`29.37ns ± 412.05ps`|`41.84ns`|`26.13ns - 70.33ns`|`29.37ns ± 133.3ns`|`1.77μs`|`1.24μs - 1.78μs`|
|linked list map|`524288`|`53.88ns ± 486.19ps`|`83.7ns`|`34.8ns - 92.53ns`|`53.88ns ± 140.8ns`|`1.86μs`|`1.53μs - 1.9μs`|
|map|`524288`|`115.88ns ± 639.68ps`|`139.97ns`|`73.99ns - 146.37ns`|`115.88ns ± 135.05ns`|`1.85μs`|`1.53μs - 2.52μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`46.37ns ± 506.22ps`|`78.3ns`|`40.83ns - 79.67ns`|`46.37ns ± 149.28ns`|`1.96μs`|`1.54μs - 1.97μs`|
|two object buckets|`524288`|`51.95ns ± 409.29ps`|`60.47ns`|`44.2ns - 88.86ns`|`51.95ns ± 163.19ns`|`2.13μs`|`1.72μs - 2.14μs`|
|linked list map|`524288`|`62.28ns ± 958.75ps`|`97.69ns`|`56.83ns - 175.27ns`|`62.28ns ± 168.75ns`|`2.31μs`|`1.73μs - 2.35μs`|
|map|`524288`|`109.53ns ± 514.81ps`|`126.72ns`|`100.97ns - 147.71ns`|`109.53ns ± 140.64ns`|`2.02μs`|`1.5μs - 2.17μs`|

