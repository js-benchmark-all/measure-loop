# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`470.76ps ± 11ps`|`2.3ns`|`346.92ps - 21.81ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`33.25ns ± 526.67ps`|`51.99ns`|`21.24ns - 55.89ns`|
|regex|`524288`|`107.84ns ± 1.74ns`|`204.04ns`|`84.19ns - 205.67ns`|
|fp|`524288`|`276.94ns ± 3.16ns`|`437.47ns`|`245.91ns - 457.88ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`150.79ns ± 1.95ns`|`229.21ns`|`118.51ns - 230.36ns`|
|fp & procedural filter|`524288`|`248.95ns ± 7.43ns`|`408.31ns`|`123.36ns - 412.6ns`|
|fp|`524288`|`493.54ns ± 3.78ns`|`694.16ns`|`439.14ns - 817.95ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`3.46ns ± 360.11ps`|`25.82ns`|`1.57ns - 35.59ns`|
|monomorphic object|`524288`|`4.27ns ± 617.25ps`|`27.68ns`|`1.46ns - 36.33ns`|
|monomorphic array|`524288`|`6.14ns ± 741.32ps`|`26.9ns`|`1.42ns - 34.29ns`|
|polymorphic object|`524288`|`8.24ns ± 731.8ps`|`29.77ns`|`2.02ns - 32.84ns`|
|megamorphic object|`524288`|`20.79ns ± 537.58ps`|`43.47ns`|`11.46ns - 47.86ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.97ns ± 532.97ps`|`25.23ns`|`3.76ns - 28.45ns`|
|monomorphic object|`524288`|`10.05ns ± 351.08ps`|`25.72ns`|`7.61ns - 33.58ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.87ns ± 321.13ps`|`23.2ns`|`5.01ns - 37.88ns`|
|prototype chain (override prototype)|`524288`|`12.16ns ± 207.04ps`|`19.16ns`|`9.56ns - 33.88ns`|
|prototype chain (create with prototype)|`524288`|`12.35ns ± 262.97ps`|`22.81ns`|`7.61ns - 30.27ns`|
|WeakMap store|`524288`|`13.53ns ± 369.1ps`|`23.31ns`|`6.94ns - 32.91ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`108.69ns ± 507.86ps`|`125.78ns`|`98.92ns - 126.22ns`|
|Object.create(null)|`524288`|`239.71ns ± 3.86ns`|`438.34ns`|`209.22ns - 447.53ns`|
|function constructor|`524288`|`909.44ns ± 6.81ns`|`1.1μs`|`825.63ns - 1.13μs`|
|object literal (computed properties)|`524288`|`934.4ns ± 6.74ns`|`1.04μs`|`817.08ns - 1.06μs`|
|function constructor (freezed proto)|`524288`|`954.97ns ± 7.11ns`|`1.09μs`|`856.96ns - 1.09μs`|
|object literal|`524288`|`975.84ns ± 6.56ns`|`1.11μs`|`868.25ns - 1.11μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`8.58ns ± 1.19ns`|`103.32ns`|`3.53ns - 104.49ns`|
|Object.create()|`524288`|`9.66ns ± 1.04ns`|`56.36ns`|`2.49ns - 81.39ns`|
|constructor|`524288`|`26.68ns ± 4.11ns`|`186.11ns`|`2.16ns - 186.26ns`|
|set prototype|`524288`|`35.4ns ± 2.96ns`|`144.73ns`|`2.39ns - 145.16ns`|
|object spread|`524288`|`79.97ns ± 1.09ns`|`132.36ns`|`53.01ns - 133.76ns`|
|Object.setPrototypeOf()|`524288`|`178.11ns ± 3.42ns`|`331.25ns`|`153.06ns - 394.73ns`|
|set __proto__|`524288`|`326.34ns ± 8.89ns`|`527.13ns`|`192.91ns - 534.42ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`58.94ns ± 893.37ps`|`106.12ns`|`39.26ns - 117.21ns`|
|Set direct assign|`1048576`|`151.32ns ± 908.74ps`|`223.57ns`|`126.41ns - 251.94ns`|
|Set|`1048576`|`156.69ns ± 1.45ns`|`232.4ns`|`127.87ns - 236.41ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`50.92ns ± 197.84ps`|`63.98ns`|`38.61ns - 70.61ns`|
|Set|`1048576`|`80.89ns ± 444.67ps`|`101.95ns`|`51.02ns - 123.86ns`|
|Set direct assign|`1048576`|`94ns ± 570.6ps`|`135.16ns`|`65.2ns - 140.21ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`122.2ns ± 974.78ps`|`181.12ns`|`103.29ns - 185.8ns`|
|Set direct assign|`1048576`|`170.95ns ± 1.04ns`|`239.4ns`|`148.49ns - 269.41ns`|
|Set|`1048576`|`173.1ns ± 939.26ps`|`243.9ns`|`146.01ns - 268.69ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`87.09ns ± 339.88ps`|`100.9ns`|`73.15ns - 131.85ns`|
|Set direct assign|`1048576`|`99.55ns ± 621.97ps`|`148.12ns`|`85.37ns - 153.58ns`|
|Array.includes()|`1048576`|`167.46ns ± 1.72ns`|`238.27ns`|`129.18ns - 241.02ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`196.22ns ± 680.09ps`|`221.51ns`|`177.6ns - 289.22ns`|
|Array.includes()|`1048576`|`212.45ns ± 1.53ns`|`327.83ns`|`183.8ns - 337.7ns`|
|Set direct assign|`1048576`|`238.69ns ± 2.32ns`|`306.8ns`|`198.95ns - 319.85ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`105.32ns ± 1ns`|`151.49ns`|`85.16ns - 168.17ns`|
|Set direct assign|`1048576`|`108.5ns ± 849.91ps`|`162.53ns`|`95.78ns - 166.1ns`|
|Array.includes()|`1048576`|`207.59ns ± 1.01ns`|`248.75ns`|`182.24ns - 343.85ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`237.28ns ± 1.1ns`|`272.47ns`|`206.31ns - 412.94ns`|
|Set|`1048576`|`284.1ns ± 655.65ps`|`309.97ns`|`263.2ns - 338.04ns`|
|Array.includes()|`1048576`|`388.57ns ± 1.63ns`|`430.43ns`|`344.02ns - 629.78ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`116ns ± 707.07ps`|`176.46ns`|`93.03ns - 183.86ns`|
|Set|`1048576`|`150.92ns ± 1.1ns`|`235.65ns`|`133.06ns - 251.9ns`|
|Array.includes()|`1048576`|`382.68ns ± 1.39ns`|`409.21ns`|`333.52ns - 628.08ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`212.57ns ± 2.26ns`|`341.33ns`|`178.8ns - 343.75ns`|
|Array.includes()|`524288`|`215.23ns ± 1.37ns`|`307.74ns`|`196.09ns - 323.59ns`|
|Set direct assign|`524288`|`242.65ns ± 3.41ns`|`357.51ns`|`194.93ns - 368.98ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`128.29ns ± 817.84ps`|`157.05ns`|`114.38ns - 194.84ns`|
|Set direct assign|`524288`|`142.45ns ± 1.17ns`|`233.48ns`|`128.4ns - 241.62ns`|
|Array.includes()|`524288`|`216.96ns ± 1.76ns`|`324.93ns`|`193.06ns - 388.94ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`233.83ns ± 912.95ps`|`262.85ns`|`210.24ns - 278.15ns`|
|Set direct assign|`524288`|`269.17ns ± 3.51ns`|`411.57ns`|`220.54ns - 416.36ns`|
|Array.includes()|`524288`|`427.95ns ± 1.82ns`|`450.23ns`|`398.17ns - 618.85ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`143.55ns ± 1.47ns`|`219.78ns`|`127.18ns - 230.21ns`|
|Set direct assign|`524288`|`152.29ns ± 1.71ns`|`259.26ns`|`137.04ns - 261.26ns`|
|Array.includes()|`524288`|`506.24ns ± 8.74ns`|`677.6ns`|`409.02ns - 686.92ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`268.61ns ± 759.46ps`|`285.66ns`|`251.91ns - 308.27ns`|
|Set direct assign|`524288`|`282.16ns ± 1.79ns`|`402.6ns`|`250.04ns - 419.69ns`|
|Set|`524288`|`386.94ns ± 6.76ns`|`512.05ns`|`313.33ns - 512.54ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`205.34ns ± 2.77ns`|`265.9ns`|`160.24ns - 269.2ns`|
|Set|`524288`|`206.24ns ± 3.43ns`|`320.93ns`|`158.79ns - 324.92ns`|
|Array.includes()|`524288`|`834.4ns ± 3.23ns`|`1.04μs`|`779.61ns - 1.08μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`502.72ns ± 2.6ns`|`620ns`|`457.14ns - 654.88ns`|
|Set|`524288`|`559.05ns ± 4.7ns`|`697.1ns`|`476.25ns - 699.07ns`|
|Array.includes()|`524288`|`783.56ns ± 6.47ns`|`1.1μs`|`721.48ns - 1.31μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`260.85ns ± 2.52ns`|`437.11ns`|`231.42ns - 443.02ns`|
|Set|`524288`|`329.01ns ± 4.9ns`|`453.27ns`|`281.26ns - 558.31ns`|
|Array.includes()|`524288`|`769.73ns ± 3.76ns`|`1.02μs`|`711.29ns - 1.11μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`598.11ns ± 15.58ns`|`1.04μs`|`547.86ns - 1.04μs`|
|Set|`131072`|`601.52ns ± 20.28ns`|`1.04μs`|`543.64ns - 1.04μs`|
|Array.includes()|`131072`|`977.08ns ± 8.6ns`|`1.17μs`|`919.6ns - 1.17μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`441.09ns ± 2.06ns`|`473.22ns`|`422.89ns - 473.22ns`|
|Set|`131072`|`459.39ns ± 13.61ns`|`777.1ns`|`396.7ns - 777.1ns`|
|Array.includes()|`131072`|`3.3μs ± 32.76ns`|`3.7μs`|`3.11μs - 3.7μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`807.83ns ± 5.95ns`|`917.44ns`|`757.78ns - 917.44ns`|
|Set direct assign|`131072`|`859.12ns ± 11.5ns`|`995.46ns`|`785.96ns - 995.46ns`|
|Array.includes()|`131072`|`1.24μs ± 7.03ns`|`1.39μs`|`1.18μs - 1.39μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`552.04ns ± 12.56ns`|`940.16ns`|`507.27ns - 940.16ns`|
|Set|`131072`|`572.58ns ± 19.32ns`|`962.26ns`|`510.96ns - 962.26ns`|
|Array.includes()|`131072`|`3.79μs ± 41.09ns`|`4.19μs`|`3.48μs - 4.19μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.19μs ± 6.3ns`|`1.28μs`|`1.11μs - 1.28μs`|
|Set direct assign|`131072`|`1.26μs ± 11.62ns`|`1.43μs`|`1.16μs - 1.43μs`|
|Array.includes()|`131072`|`5.1μs ± 34.55ns`|`5.53μs`|`4.87μs - 5.53μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`726.66ns ± 21.87ns`|`1.24μs`|`645.58ns - 1.24μs`|
|Set direct assign|`131072`|`781.3ns ± 9.32ns`|`880.06ns`|`723.04ns - 880.06ns`|
|Array.includes()|`131072`|`5.16μs ± 46.03ns`|`5.64μs`|`4.71μs - 5.64μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.03μs ± 10.51ns`|`2.15μs`|`1.94μs - 2.15μs`|
|Set|`131072`|`2.1μs ± 23.41ns`|`2.33μs`|`1.93μs - 2.33μs`|
|Array.includes()|`131072`|`15.01μs ± 39.45ns`|`15.5μs`|`14.6μs - 15.5μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.09μs ± 21.78ns`|`1.75μs`|`1.01μs - 1.75μs`|
|Set direct assign|`131072`|`1.1μs ± 11.14ns`|`1.22μs`|`1.01μs - 1.22μs`|
|Array.includes()|`131072`|`14.85μs ± 38.09ns`|`15.61μs`|`14.57μs - 15.61μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`115.47ns ± 744.1ps`|`145.83ns`|`100.5ns - 157.74ns`|
|generator|`524288`|`147.11ns ± 1.09ns`|`202.26ns`|`128.3ns - 202.78ns`|
|await non-promise|`524288`|`250.29ns ± 10.15ns`|`1μs`|`97.67ns - 1.01μs`|
|async generator|`524288`|`870.99ns ± 5.58ns`|`998.91ns`|`756.63ns - 1.32μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.39μs ± 20.99ns`|`1.66μs`|`1.04μs - 1.66μs`|
|generator|`131072`|`1.93μs ± 11.38ns`|`2.25μs`|`1.87μs - 2.25μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`153.69ns ± 964.54ps`|`210.54ns`|`140.32ns - 236.89ns`|`153.69ns ± 87.54ns`|`1.31μs`|`1.01μs - 1.6μs`|
|map|`524288`|`196.71ns ± 2.25ns`|`306.09ns`|`173.15ns - 312.22ns`|`196.71ns ± 84.4ns`|`1.56μs`|`981.24ns - 1.65μs`|
|linked list map|`524288`|`224.11ns ± 2.37ns`|`352.05ns`|`197.48ns - 382.63ns`|`224.11ns ± 83.67ns`|`1.46μs`|`993.9ns - 1.51μs`|
|two object buckets|`524288`|`266.49ns ± 3.19ns`|`426.21ns`|`231.85ns - 427.88ns`|`266.49ns ± 78.59ns`|`1.32μs`|`1.01μs - 1.33μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`26.03ns ± 412.85ps`|`54.22ns`|`13.85ns - 55.16ns`|`26.03ns ± 112.16ns`|`1.65μs`|`1.11μs - 1.87μs`|
|linked list map|`524288`|`26.65ns ± 397.9ps`|`55.17ns`|`17.81ns - 56.61ns`|`26.65ns ± 115.15ns`|`1.59μs`|`1.18μs - 3.33μs`|
|two map buckets|`524288`|`36.6ns ± 459.43ps`|`62.45ns`|`27.47ns - 64.99ns`|`36.6ns ± 102.2ns`|`1.53μs`|`1.06μs - 1.54μs`|
|two object buckets|`524288`|`48.03ns ± 375.38ps`|`71.53ns`|`33.53ns - 73.42ns`|`48.03ns ± 99.56ns`|`1.37μs`|`1.04μs - 1.48μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`58.87ns ± 274.29ps`|`72.91ns`|`54.77ns - 80.63ns`|`58.87ns ± 96.37ns`|`1.32μs`|`983.27ns - 1.38μs`|
|two object buckets|`524288`|`91.8ns ± 430.94ps`|`104.96ns`|`84.18ns - 113.25ns`|`91.8ns ± 95.21ns`|`1.29μs`|`1.03μs - 1.4μs`|
|map|`524288`|`93.02ns ± 572.1ps`|`113.83ns`|`83.18ns - 114.63ns`|`93.02ns ± 95.12ns`|`1.34μs`|`1.04μs - 1.37μs`|
|linked list map|`524288`|`121.54ns ± 697.27ps`|`151.42ns`|`110.03ns - 154.97ns`|`121.54ns ± 91.92ns`|`1.27μs`|`1.04μs - 1.27μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`160.47ns ± 1.32ns`|`233.6ns`|`144.76ns - 239.8ns`|`160.47ns ± 85.8ns`|`1.23μs`|`995.86ns - 1.23μs`|
|map|`524288`|`219.45ns ± 1.61ns`|`339.53ns`|`197.58ns - 350.61ns`|`219.45ns ± 78.92ns`|`1.2μs`|`962.78ns - 1.2μs`|
|linked list map|`524288`|`220.19ns ± 1.54ns`|`304.28ns`|`183.86ns - 319.72ns`|`220.19ns ± 81.02ns`|`1.33μs`|`977.81ns - 1.38μs`|
|two object buckets|`524288`|`252.12ns ± 1.79ns`|`320.66ns`|`227.53ns - 408.8ns`|`252.12ns ± 77.42ns`|`1.25μs`|`996.45ns - 1.26μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`29.03ns ± 365.64ps`|`55.66ns`|`23.82ns - 57.84ns`|`29.03ns ± 108.53ns`|`1.4μs`|`1.1μs - 1.43μs`|
|linked list map|`524288`|`29.52ns ± 352.08ps`|`55.7ns`|`25.62ns - 60.98ns`|`29.52ns ± 109.49ns`|`1.5μs`|`1.01μs - 1.53μs`|
|two map buckets|`524288`|`49.37ns ± 439.43ps`|`72.82ns`|`36.82ns - 82.44ns`|`49.37ns ± 101.85ns`|`1.33μs`|`1.06μs - 1.33μs`|
|two object buckets|`524288`|`56.31ns ± 442.8ps`|`86.63ns`|`48.12ns - 87.32ns`|`56.31ns ± 101.1ns`|`1.39μs`|`1.03μs - 1.47μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.08ns ± 342.9ps`|`77.35ns`|`58.45ns - 93.15ns`|`65.08ns ± 100.68ns`|`1.44μs`|`1.06μs - 1.71μs`|
|two object buckets|`524288`|`90.02ns ± 517.99ps`|`103.47ns`|`67.61ns - 131.41ns`|`90.02ns ± 97.58ns`|`1.34μs`|`1.06μs - 1.52μs`|
|map|`524288`|`119.26ns ± 625.19ps`|`143.06ns`|`106.96ns - 165.69ns`|`119.26ns ± 93.95ns`|`1.35μs`|`1.03μs - 1.37μs`|
|linked list map|`524288`|`120.99ns ± 523.03ps`|`139.13ns`|`108.56ns - 142.21ns`|`120.99ns ± 95.14ns`|`1.33μs`|`1.05μs - 1.35μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`166.89ns ± 2.24ns`|`227.65ns`|`139.88ns - 257.05ns`|`166.89ns ± 91.84ns`|`1.32μs`|`1.02μs - 1.34μs`|
|linked list map|`524288`|`234.84ns ± 2.81ns`|`342.82ns`|`201.48ns - 403.34ns`|`234.84ns ± 87.92ns`|`1.4μs`|`1.08μs - 1.43μs`|
|two object buckets|`524288`|`255.35ns ± 2.56ns`|`342.65ns`|`197.73ns - 373.95ns`|`255.35ns ± 84.38ns`|`1.38μs`|`1.05μs - 1.43μs`|
|map|`524288`|`385.14ns ± 2.13ns`|`521.17ns`|`361.28ns - 546.51ns`|`385.14ns ± 70.92ns`|`1.3μs`|`1.06μs - 1.32μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`34.14ns ± 430.83ps`|`63.09ns`|`24.78ns - 70.62ns`|`34.14ns ± 113.41ns`|`1.54μs`|`1.18μs - 1.57μs`|
|map|`524288`|`40.12ns ± 332.72ps`|`46.13ns`|`35.79ns - 75.19ns`|`40.12ns ± 110.32ns`|`1.44μs`|`1.08μs - 1.51μs`|
|two map buckets|`524288`|`61.52ns ± 350.98ps`|`78.27ns`|`54.93ns - 83.94ns`|`61.52ns ± 103.53ns`|`1.46μs`|`1.08μs - 1.53μs`|
|two object buckets|`524288`|`66.41ns ± 396.58ps`|`86.41ns`|`57.83ns - 88.36ns`|`66.41ns ± 102.47ns`|`1.38μs`|`1.09μs - 1.8μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`64.42ns ± 301.96ps`|`71.61ns`|`45.65ns - 84.6ns`|`64.42ns ± 109.35ns`|`1.54μs`|`1.12μs - 1.56μs`|
|two object buckets|`524288`|`88.65ns ± 435.92ps`|`102.73ns`|`64.9ns - 108.54ns`|`88.65ns ± 102.92ns`|`1.4μs`|`1.07μs - 1.41μs`|
|linked list map|`524288`|`123.17ns ± 498.93ps`|`145.42ns`|`112.15ns - 146.21ns`|`123.17ns ± 101ns`|`1.48μs`|`1.1μs - 1.49μs`|
|map|`524288`|`257.67ns ± 746.15ps`|`281.27ns`|`234.72ns - 281.68ns`|`257.67ns ± 86.78ns`|`1.41μs`|`1.05μs - 1.43μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`214.97ns ± 7.74ns`|`573.03ns`|`147.12ns - 664.19ns`|`214.97ns ± 109.21ns`|`1.69μs`|`1.26μs - 1.89μs`|
|linked list map|`524288`|`291.72ns ± 3.49ns`|`395.77ns`|`246.48ns - 464.48ns`|`291.72ns ± 99.24ns`|`1.55μs`|`1.27μs - 1.56μs`|
|two object buckets|`524288`|`302.41ns ± 3.28ns`|`407.91ns`|`262.54ns - 518.74ns`|`302.41ns ± 90.09ns`|`1.46μs`|`1.21μs - 1.47μs`|
|map|`524288`|`1.52μs ± 4.75ns`|`1.65μs`|`1.43μs - 1.67μs`|`1.52μs ± 12.73ns`|`1.55μs`|`1.21μs - 1.57μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`28.79ns ± 506.69ps`|`58.37ns`|`23.04ns - 66.33ns`|`28.79ns ± 142.24ns`|`1.86μs`|`1.4μs - 1.9μs`|
|two map buckets|`524288`|`31.62ns ± 547.35ps`|`70.38ns`|`27.28ns - 82.24ns`|`31.62ns ± 130.54ns`|`1.65μs`|`1.35μs - 1.71μs`|
|linked list map|`524288`|`55.13ns ± 497.74ps`|`74.95ns`|`30.5ns - 92.41ns`|`55.13ns ± 131.74ns`|`1.68μs`|`1.36μs - 1.72μs`|
|map|`524288`|`113.78ns ± 412.76ps`|`126.01ns`|`104.63ns - 130.78ns`|`113.78ns ± 126.36ns`|`1.77μs`|`1.38μs - 1.78μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`44.23ns ± 392.94ps`|`54.61ns`|`39.01ns - 74.36ns`|`44.23ns ± 160.97ns`|`2.11μs`|`1.62μs - 2.13μs`|
|two object buckets|`524288`|`48.31ns ± 686.51ps`|`66.3ns`|`23.58ns - 71.77ns`|`48.31ns ± 144.28ns`|`1.86μs`|`1.48μs - 2.14μs`|
|linked list map|`524288`|`63.15ns ± 484.29ps`|`74.38ns`|`52.98ns - 103.63ns`|`63.15ns ± 163.85ns`|`2.18μs`|`1.67μs - 2.18μs`|
|map|`524288`|`109.07ns ± 492.41ps`|`126.02ns`|`99.19ns - 140.75ns`|`109.07ns ± 135.64ns`|`1.84μs`|`1.44μs - 1.86μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`775.47ns ± 6.3ns`|`1.26μs`|`712.18ns - 1.86μs`|
|header pairs|`1048576`|`859.33ns ± 6.75ns`|`1.14μs`|`785.27ns - 2.07μs`|
|new Headers().set()|`1048576`|`1.21μs ± 9.73ns`|`1.98μs`|`1.02μs - 2.45μs`|
|new Headers().append()|`1048576`|`1.24μs ± 9.98ns`|`2.09μs`|`1.07μs - 2.24μs`|
|new Headers(pairs)|`1048576`|`1.39μs ± 13.96ns`|`2.35μs`|`1.23μs - 3.7μs`|
|new Headers(record)|`1048576`|`1.48μs ± 9.51ns`|`2.19μs`|`1.35μs - 2.7μs`|

