# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`453.32ps ± 11.28ps`|`383.79ps`|`356.93ps - 28.09ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`49.1ns ± 891.34ps`|`74.67ns`|`34.42ns - 76.28ns`|
|regex|`524288`|`116.82ns ± 1.31ns`|`174.45ns`|`81.53ns - 176.42ns`|
|fp|`524288`|`265.32ns ± 3.53ns`|`350.96ns`|`204.33ns - 353.05ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`163.81ns ± 1.04ns`|`188.55ns`|`146.3ns - 276.03ns`|
|fp & procedural filter|`524288`|`305.05ns ± 7.65ns`|`490.46ns`|`112.42ns - 501.02ns`|
|fp|`524288`|`446.73ns ± 3.6ns`|`534.63ns`|`416.18ns - 535.27ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`1.8ns ± 217.31ps`|`6ns`|`1.27ns - 28.86ns`|
|polymorphic array|`524288`|`2.8ns ± 202.21ps`|`5.05ns`|`2.34ns - 28.45ns`|
|polymorphic object|`524288`|`8.72ns ± 898.44ps`|`38.74ns`|`3.58ns - 42.14ns`|
|monomorphic array|`524288`|`14.39ns ± 1.15ns`|`33.05ns`|`2.5ns - 33.75ns`|
|megamorphic object|`524288`|`28.03ns ± 1.04ns`|`58.01ns`|`12.53ns - 60.4ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.05ns ± 604.26ps`|`34.15ns`|`2.45ns - 34.26ns`|
|monomorphic object|`524288`|`8.82ns ± 429.99ps`|`27.29ns`|`3.95ns - 33.88ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.08ns ± 249.65ps`|`28.74ns`|`8.01ns - 29.33ns`|
|prototype chain (override prototype)|`524288`|`12.88ns ± 301.49ps`|`21.65ns`|`11.18ns - 44.45ns`|
|WeakMap store|`524288`|`14.52ns ± 466.46ps`|`23.94ns`|`7.1ns - 54.87ns`|
|prototype chain (create with prototype)|`524288`|`16.99ns ± 500.29ps`|`36.14ns`|`10.49ns - 46.07ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`157.29ns ± 413.64ps`|`172.65ns`|`145.92ns - 178.63ns`|
|Object.create(null)|`524288`|`266.53ns ± 2.38ns`|`331.84ns`|`244.8ns - 336.03ns`|
|function constructor|`524288`|`1.03μs ± 4.22ns`|`1.14μs`|`992.18ns - 1.15μs`|
|function constructor (freezed proto)|`524288`|`1.04μs ± 5.27ns`|`1.17μs`|`1μs - 1.44μs`|
|object literal (computed properties)|`524288`|`1.06μs ± 10.9ns`|`1.56μs`|`953.23ns - 1.57μs`|
|object literal|`524288`|`1.08μs ± 4.17ns`|`1.17μs`|`1.02μs - 1.22μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`8.1ns ± 1.89ns`|`140.93ns`|`2.16ns - 186.68ns`|
|Object.create()|`524288`|`13.8ns ± 2.03ns`|`137.64ns`|`2.2ns - 144.09ns`|
|set prototype|`524288`|`36.28ns ± 2.6ns`|`135.4ns`|`2.21ns - 157.24ns`|
|function constructor|`524288`|`49.83ns ± 4.09ns`|`158.01ns`|`2.16ns - 159.18ns`|
|Object.setPrototypeOf()|`524288`|`236.05ns ± 2.99ns`|`369.56ns`|`197.19ns - 380.26ns`|
|set __proto__|`524288`|`303.92ns ± 4.95ns`|`430.85ns`|`241ns - 436.56ns`|
|object spread|`524288`|`589.45ns ± 6.69ns`|`935.33ns`|`554.68ns - 1.05μs`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`67.79ns ± 312.68ps`|`84.08ns`|`33ns - 102.21ns`|
|Set|`1048576`|`192.93ns ± 2.24ns`|`275.33ns`|`151.61ns - 335.69ns`|
|Set direct assign|`1048576`|`199.49ns ± 1.99ns`|`304.16ns`|`168.75ns - 308.63ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`85.84ns ± 480.36ps`|`101.9ns`|`49.24ns - 106.15ns`|
|Set|`1048576`|`106.01ns ± 655.79ps`|`146.67ns`|`71.79ns - 149.75ns`|
|Set direct assign|`1048576`|`129.55ns ± 1.11ns`|`178.64ns`|`103.29ns - 179.32ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`164.64ns ± 1.39ns`|`204.54ns`|`128.82ns - 208.83ns`|
|Set direct assign|`1048576`|`197.67ns ± 778.33ps`|`219.06ns`|`178.15ns - 329.03ns`|
|Set|`1048576`|`206.99ns ± 2.35ns`|`301.22ns`|`162.29ns - 303.33ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`113.74ns ± 860.73ps`|`154.2ns`|`72.51ns - 154.96ns`|
|Set direct assign|`1048576`|`121.88ns ± 293.93ps`|`137.26ns`|`101.57ns - 153.58ns`|
|Array.includes()|`1048576`|`144.1ns ± 235.92ps`|`153.95ns`|`130.13ns - 162.12ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`129.7ns ± 1.12ns`|`179.67ns`|`112.62ns - 319.54ns`|
|Set|`1048576`|`220.16ns ± 1.76ns`|`354.16ns`|`199.51ns - 354.98ns`|
|Set direct assign|`1048576`|`256.61ns ± 3.16ns`|`361.43ns`|`206ns - 371.83ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`116.31ns ± 628.12ps`|`160.48ns`|`103.97ns - 186.43ns`|
|Set direct assign|`1048576`|`128.39ns ± 742.66ps`|`188.91ns`|`110.13ns - 192.55ns`|
|Array.includes()|`1048576`|`265.52ns ± 2.19ns`|`390.52ns`|`240.99ns - 395.52ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`177.2ns ± 959.14ps`|`273.23ns`|`160.09ns - 284.52ns`|
|Set direct assign|`1048576`|`327.22ns ± 3ns`|`420.69ns`|`292.33ns - 423ns`|
|Set|`1048576`|`381.67ns ± 4.71ns`|`556.12ns`|`313.35ns - 567.92ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`139.3ns ± 563.6ps`|`183.69ns`|`104.81ns - 188.59ns`|
|Set|`1048576`|`190.82ns ± 1.15ns`|`277ns`|`165.46ns - 286.11ns`|
|Array.includes()|`1048576`|`538.19ns ± 6.83ns`|`764ns`|`461.46ns - 771.14ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`159.31ns ± 2.2ns`|`218.87ns`|`124.88ns - 220.54ns`|
|Set|`524288`|`238.13ns ± 1.34ns`|`298.87ns`|`222.84ns - 384.25ns`|
|Set direct assign|`524288`|`301.08ns ± 4.62ns`|`415.73ns`|`243.15ns - 416.42ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`166.28ns ± 1.43ns`|`246.73ns`|`152.25ns - 248.56ns`|
|Set direct assign|`524288`|`209.84ns ± 2.82ns`|`288.8ns`|`175.01ns - 292.22ns`|
|Array.includes()|`524288`|`270.72ns ± 3.92ns`|`384.75ns`|`236.65ns - 385.84ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`270.3ns ± 1.46ns`|`293.21ns`|`255.77ns - 445.71ns`|
|Set direct assign|`524288`|`329.39ns ± 4.4ns`|`426.57ns`|`294.46ns - 427.18ns`|
|Array.includes()|`524288`|`513.77ns ± 483.84ps`|`537.74ns`|`501.65ns - 544.03ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`191.16ns ± 2.32ns`|`261.6ns`|`149.97ns - 262.16ns`|
|Set direct assign|`524288`|`206.65ns ± 2.56ns`|`297.5ns`|`167.74ns - 302.62ns`|
|Array.includes()|`524288`|`511.93ns ± 2.06ns`|`526.09ns`|`500.03ns - 771.73ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`389.29ns ± 4.36ns`|`486.97ns`|`353.24ns - 489.3ns`|
|Set|`524288`|`391.35ns ± 2.22ns`|`420.99ns`|`381.36ns - 667.15ns`|
|Array.includes()|`524288`|`1.14μs ± 12.11ns`|`1.41μs`|`1.04μs - 1.49μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`230.46ns ± 4.16ns`|`305.82ns`|`175.39ns - 307.52ns`|
|Set|`524288`|`265.32ns ± 3.8ns`|`386ns`|`211.71ns - 387.05ns`|
|Array.includes()|`524288`|`1.17μs ± 13.27ns`|`1.37μs`|`1.04μs - 1.38μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`392.58ns ± 5.1ns`|`641.36ns`|`360.23ns - 647.76ns`|
|Set direct assign|`524288`|`600.92ns ± 4.78ns`|`695.7ns`|`557.57ns - 726.8ns`|
|Set|`524288`|`673.6ns ± 8.27ns`|`816.72ns`|`598.42ns - 817.42ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`351.9ns ± 3.57ns`|`433.76ns`|`320.72ns - 434.42ns`|
|Set|`524288`|`397.71ns ± 6.84ns`|`533.64ns`|`331.06ns - 534.06ns`|
|Array.includes()|`524288`|`1.04μs ± 12.13ns`|`1.26μs`|`931.79ns - 1.27μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`799ns ± 9.58ns`|`881.44ns`|`751.94ns - 881.44ns`|
|Set|`131072`|`808.59ns ± 17.64ns`|`947.17ns`|`722.18ns - 947.17ns`|
|Array.includes()|`131072`|`4.01μs ± 22.83ns`|`4.26μs`|`3.93μs - 4.26μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`621.96ns ± 12.75ns`|`765.62ns`|`576.77ns - 765.62ns`|
|Set direct assign|`131072`|`638.35ns ± 7.5ns`|`716.69ns`|`605.37ns - 716.69ns`|
|Array.includes()|`131072`|`4.04μs ± 24.44ns`|`4.26μs`|`3.93μs - 4.26μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1μs ± 16.65ns`|`1.15μs`|`934.18ns - 1.15μs`|
|Set direct assign|`131072`|`1.01μs ± 9.73ns`|`1.1μs`|`934.57ns - 1.1μs`|
|Array.includes()|`131072`|`4.44μs ± 9.4ns`|`4.71μs`|`4.41μs - 4.71μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`756.65ns ± 13.44ns`|`894.5ns`|`700.04ns - 894.5ns`|
|Set direct assign|`131072`|`763.36ns ± 7.26ns`|`832.11ns`|`728.13ns - 832.11ns`|
|Array.includes()|`131072`|`4.51μs ± 23.91ns`|`4.73μs`|`4.41μs - 4.73μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.36μs ± 10.66ns`|`1.55μs`|`1.33μs - 1.55μs`|
|Set direct assign|`131072`|`1.42μs ± 9.57ns`|`1.54μs`|`1.38μs - 1.54μs`|
|Array.includes()|`131072`|`2.51μs ± 21.25ns`|`2.8μs`|`2.4μs - 2.8μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`943.32ns ± 7.18ns`|`1.02μs`|`912.55ns - 1.02μs`|
|Set|`131072`|`943.32ns ± 14.79ns`|`1.06μs`|`872.02ns - 1.06μs`|
|Array.includes()|`131072`|`6.15μs ± 21.92ns`|`6.47μs`|`6.07μs - 6.47μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.18μs ± 8.21ns`|`2.29μs`|`2.13μs - 2.29μs`|
|Set|`131072`|`2.2μs ± 17.39ns`|`2.4μs`|`2.13μs - 2.4μs`|
|Array.includes()|`131072`|`17.43μs ± 26.06ns`|`17.64μs`|`17.23μs - 17.64μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.25μs ± 10.33ns`|`1.41μs`|`1.21μs - 1.41μs`|
|Set direct assign|`131072`|`1.27μs ± 8.41ns`|`1.34μs`|`1.22μs - 1.34μs`|
|Array.includes()|`131072`|`17.34μs ± 24.96ns`|`17.88μs`|`17.23μs - 17.88μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`117.29ns ± 776.98ps`|`148.1ns`|`102.93ns - 149.42ns`|
|await promise|`524288`|`144.11ns ± 804.03ps`|`178.43ns`|`109.02ns - 182.03ns`|
|await non-promise|`524288`|`154.06ns ± 741.01ps`|`193.31ns`|`139.16ns - 202.55ns`|
|async generator|`524288`|`764.78ns ± 1.68ns`|`835.63ns`|`736.97ns - 932.77ns`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.05μs ± 41.99ns`|`1.68μs`|`898.58ns - 1.68μs`|
|generator|`131072`|`1.95μs ± 8.22ns`|`2.19μs`|`1.91μs - 2.19μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`176.89ns ± 2.02ns`|`218.71ns`|`149.99ns - 253.11ns`|`176.89ns ± 86.99ns`|`1.27μs`|`1.09μs - 1.33μs`|
|map|`524288`|`213.27ns ± 2.43ns`|`297.96ns`|`183.42ns - 341.43ns`|`213.27ns ± 83.77ns`|`1.42μs`|`1.08μs - 1.45μs`|
|linked list map|`524288`|`245.26ns ± 2.04ns`|`287.16ns`|`216.93ns - 288.84ns`|`245.26ns ± 82.13ns`|`1.27μs`|`1.1μs - 1.46μs`|
|two object buckets|`524288`|`281.7ns ± 2.27ns`|`393.47ns`|`249.97ns - 394.93ns`|`281.7ns ± 76.95ns`|`1.25μs`|`1.08μs - 1.29μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`25.67ns ± 449.86ps`|`57.07ns`|`17.76ns - 62.45ns`|`25.67ns ± 120.53ns`|`1.5μs`|`1.15μs - 1.5μs`|
|linked list map|`524288`|`32.83ns ± 503.82ps`|`71.58ns`|`23.8ns - 71.85ns`|`32.83ns ± 112.58ns`|`1.46μs`|`1.22μs - 1.66μs`|
|two map buckets|`524288`|`38.74ns ± 768.82ps`|`80.04ns`|`30.26ns - 85.01ns`|`38.74ns ± 102.62ns`|`1.33μs`|`1.12μs - 1.48μs`|
|two object buckets|`524288`|`49.53ns ± 491.12ps`|`84.72ns`|`37.34ns - 89.33ns`|`49.53ns ± 101.19ns`|`1.28μs`|`1.11μs - 1.37μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`64.02ns ± 320.32ps`|`70.49ns`|`61.54ns - 96.96ns`|`64.02ns ± 99.69ns`|`1.33μs`|`1.1μs - 1.39μs`|
|map|`524288`|`100.52ns ± 593.1ps`|`129.65ns`|`91.73ns - 137.02ns`|`100.52ns ± 98.45ns`|`1.29μs`|`1.1μs - 1.32μs`|
|two object buckets|`524288`|`100.74ns ± 797.75ps`|`139.54ns`|`90.33ns - 174.79ns`|`100.74ns ± 93.66ns`|`1.3μs`|`1.09μs - 1.32μs`|
|linked list map|`524288`|`138.04ns ± 611.44ps`|`165.51ns`|`128.86ns - 187.02ns`|`138.04ns ± 96.79ns`|`1.39μs`|`1.16μs - 1.39μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`175.44ns ± 1.65ns`|`253ns`|`149.86ns - 262.3ns`|`175.44ns ± 88.07ns`|`1.26μs`|`1.1μs - 1.27μs`|
|linked list map|`524288`|`242.69ns ± 2.21ns`|`302.03ns`|`214.65ns - 361.25ns`|`242.69ns ± 81.91ns`|`1.24μs`|`1.1μs - 1.25μs`|
|map|`524288`|`256.29ns ± 3.38ns`|`381.83ns`|`209.58ns - 405.28ns`|`256.29ns ± 81.69ns`|`1.5μs`|`1.09μs - 1.93μs`|
|two object buckets|`524288`|`270.34ns ± 2.05ns`|`381.07ns`|`244.15ns - 392.96ns`|`270.34ns ± 78.58ns`|`1.23μs`|`1.08μs - 1.25μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`28.04ns ± 545.89ps`|`70.95ns`|`23.74ns - 76.75ns`|`28.04ns ± 109.62ns`|`1.37μs`|`1.17μs - 1.38μs`|
|linked list map|`524288`|`35ns ± 550.42ps`|`68.72ns`|`26.54ns - 71.52ns`|`35ns ± 108.71ns`|`1.39μs`|`1.19μs - 1.41μs`|
|two map buckets|`524288`|`47.1ns ± 534.45ps`|`83.23ns`|`37.4ns - 89.52ns`|`47.1ns ± 101.59ns`|`1.27μs`|`1.13μs - 1.28μs`|
|two object buckets|`524288`|`55.61ns ± 526.65ps`|`94.51ns`|`47.01ns - 98.67ns`|`55.61ns ± 100.13ns`|`1.32μs`|`1.09μs - 1.35μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`69.37ns ± 379.83ps`|`97.4ns`|`66.29ns - 100.2ns`|`69.37ns ± 99.12ns`|`1.27μs`|`1.12μs - 1.36μs`|
|two object buckets|`524288`|`96.61ns ± 410.75ps`|`116.02ns`|`89.04ns - 117.92ns`|`96.61ns ± 96.33ns`|`1.34μs`|`1.09μs - 1.37μs`|
|map|`524288`|`129.6ns ± 769.3ps`|`161.62ns`|`119.4ns - 170ns`|`129.6ns ± 93.5ns`|`1.43μs`|`1.08μs - 1.56μs`|
|linked list map|`524288`|`138.89ns ± 546.86ps`|`161.48ns`|`104.52ns - 164.12ns`|`138.89ns ± 93.36ns`|`1.32μs`|`1.11μs - 1.41μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`182.43ns ± 1.5ns`|`227.94ns`|`157.11ns - 254.82ns`|`182.43ns ± 89.22ns`|`1.3μs`|`1.12μs - 1.55μs`|
|linked list map|`524288`|`247.88ns ± 1.29ns`|`277.16ns`|`224.22ns - 279.21ns`|`247.88ns ± 84.87ns`|`1.3μs`|`1.12μs - 1.57μs`|
|two object buckets|`524288`|`272.03ns ± 1.75ns`|`369.59ns`|`243.72ns - 369.76ns`|`272.03ns ± 80.93ns`|`1.36μs`|`1.11μs - 1.36μs`|
|map|`524288`|`426.92ns ± 1.76ns`|`504.95ns`|`402.64ns - 518.02ns`|`426.92ns ± 66.17ns`|`1.25μs`|`1.09μs - 1.36μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`39.92ns ± 519.25ps`|`80.28ns`|`35.67ns - 84.07ns`|`39.92ns ± 113.16ns`|`1.45μs`|`1.2μs - 1.45μs`|
|linked list map|`524288`|`41.04ns ± 463.14ps`|`77.79ns`|`36.69ns - 79.69ns`|`41.04ns ± 116ns`|`1.5μs`|`1.28μs - 1.61μs`|
|two map buckets|`524288`|`61.86ns ± 775.57ps`|`98.04ns`|`54.69ns - 104.77ns`|`61.86ns ± 103.71ns`|`1.33μs`|`1.15μs - 1.47μs`|
|two object buckets|`524288`|`65.94ns ± 474.37ps`|`102.29ns`|`60.49ns - 104.51ns`|`65.94ns ± 104.73ns`|`1.37μs`|`1.17μs - 1.39μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`70.65ns ± 540.25ps`|`104.39ns`|`65.25ns - 106.65ns`|`70.65ns ± 104.64ns`|`1.37μs`|`1.18μs - 1.55μs`|
|two object buckets|`524288`|`95.69ns ± 492.95ps`|`128.56ns`|`89.03ns - 132.86ns`|`95.69ns ± 101.11ns`|`1.38μs`|`1.16μs - 1.45μs`|
|linked list map|`524288`|`144.07ns ± 562.22ps`|`164.04ns`|`133.87ns - 192.88ns`|`144.07ns ± 99.37ns`|`1.36μs`|`1.18μs - 1.4μs`|
|map|`524288`|`335.12ns ± 2.86ns`|`453.47ns`|`305.25ns - 456.74ns`|`335.12ns ± 82.21ns`|`1.63μs`|`1.17μs - 1.78μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`201.14ns ± 3.96ns`|`335.32ns`|`170.5ns - 511.92ns`|`201.14ns ± 109.74ns`|`1.75μs`|`1.26μs - 1.76μs`|
|two object buckets|`524288`|`320.07ns ± 2.52ns`|`391.91ns`|`281.44ns - 392.34ns`|`320.07ns ± 86.43ns`|`1.4μs`|`1.22μs - 1.4μs`|
|linked list map|`524288`|`327.59ns ± 4.99ns`|`525.93ns`|`268.12ns - 539.59ns`|`327.59ns ± 94.8ns`|`1.57μs`|`1.31μs - 1.62μs`|
|map|`524288`|`2.04μs ± 5.31ns`|`2.2μs`|`1.91μs - 2.21μs`|`2.04μs ± 58.93ns`|`1.51μs`|`1.24μs - 1.51μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`26.65ns ± 503.42ps`|`66.97ns`|`24.15ns - 69.42ns`|`26.65ns ± 137.05ns`|`1.78μs`|`1.48μs - 1.87μs`|
|two map buckets|`524288`|`33.02ns ± 869.04ps`|`74.58ns`|`28.17ns - 75.1ns`|`33.02ns ± 129.6ns`|`1.68μs`|`1.4μs - 1.74μs`|
|linked list map|`524288`|`61.86ns ± 527.28ps`|`90.86ns`|`55.8ns - 99.49ns`|`61.86ns ± 127.7ns`|`1.67μs`|`1.41μs - 1.73μs`|
|map|`524288`|`132.32ns ± 639.12ps`|`157.5ns`|`119.75ns - 178.9ns`|`132.32ns ± 125.38ns`|`1.76μs`|`1.39μs - 1.87μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`48.07ns ± 386.96ps`|`61.8ns`|`33.67ns - 86.8ns`|`48.07ns ± 163.2ns`|`2.09μs`|`1.59μs - 2.11μs`|
|two object buckets|`524288`|`52.06ns ± 436.57ps`|`69.87ns`|`48.5ns - 88.87ns`|`52.06ns ± 140.63ns`|`1.86μs`|`1.47μs - 2.28μs`|
|linked list map|`524288`|`66.73ns ± 653.74ps`|`106.54ns`|`58.98ns - 108.55ns`|`66.73ns ± 152.49ns`|`2.01μs`|`1.64μs - 2.02μs`|
|map|`524288`|`125.84ns ± 668.28ps`|`169.65ns`|`115.19ns - 174.25ns`|`125.84ns ± 125.95ns`|`1.72μs`|`1.39μs - 1.87μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|header pairs|`1048576`|`1.17μs ± 6.38ns`|`1.27μs`|`1.11μs - 2.17μs`|
|headers record|`1048576`|`1.32μs ± 5.83ns`|`1.43μs`|`1.28μs - 2.61μs`|
|new Headers().set()|`1048576`|`1.46μs ± 7.97ns`|`1.87μs`|`1.4μs - 2.86μs`|
|new Headers().append()|`1048576`|`1.46μs ± 6.29ns`|`1.67μs`|`1.4μs - 2.67μs`|
|new Headers(record)|`1048576`|`1.72μs ± 6.5ns`|`1.97μs`|`1.67μs - 3.07μs`|
|new Headers(pairs)|`1048576`|`1.82μs ± 7.4ns`|`2.09μs`|`1.75μs - 3.21μs`|

