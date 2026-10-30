# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`580.75ps ± 3.64ps`|`2.11ns`|`359.37ps - 9.85ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`83.94ns ± 825.84ps`|`137.21ns`|`77.32ns - 155.83ns`|
|fp & procedural filter|`524288`|`152.78ns ± 1.26ns`|`223.34ns`|`130.94ns - 229.58ns`|
|fp|`524288`|`312.68ns ± 630.61ps`|`349.5ns`|`299.92ns - 353.79ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`179.68ns ± 2.7ns`|`312.05ns`|`161.25ns - 312.44ns`|
|fp & procedural filter|`524288`|`364.86ns ± 7.29ns`|`584.53ns`|`308.34ns - 594.65ns`|
|fp|`524288`|`647.65ns ± 5.78ns`|`810.93ns`|`610.84ns - 1.09μs`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`1.33ns ± 10.56ps`|`1.68ns`|`1.24ns - 2.49ns`|
|monomorphic array|`524288`|`1.33ns ± 9.74ps`|`1.79ns`|`1.21ns - 1.91ns`|
|monomorphic object|`524288`|`1.61ns ± 36.15ps`|`1.93ns`|`1.52ns - 6.18ns`|
|polymorphic object|`524288`|`2.4ns ± 75.34ps`|`7.66ns`|`2.17ns - 8.02ns`|
|megamorphic object|`524288`|`8.4ns ± 78.91ps`|`9.8ns`|`8.14ns - 18.26ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`6.62ns ± 101.7ps`|`11.64ns`|`5.77ns - 13.16ns`|
|monomorphic object|`524288`|`7.98ns ± 116.84ps`|`13ns`|`6.2ns - 13.39ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (create with prototype)|`524288`|`4.21ns ± 29.38ps`|`6.03ns`|`4.06ns - 7.13ns`|
|prototype chain (override prototype)|`524288`|`4.35ns ± 64.75ps`|`7.06ns`|`4.03ns - 8.07ns`|
|direct assign|`524288`|`4.63ns ± 69.19ps`|`6.83ns`|`4.21ns - 7.04ns`|
|WeakMap store|`524288`|`12.37ns ± 258.03ps`|`19.38ns`|`5.33ns - 19.59ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`80.04ns ± 296.27ps`|`87.1ns`|`74.99ns - 90.83ns`|
|object literal|`524288`|`377.22ns ± 556.55ps`|`399.37ns`|`367.42ns - 408.37ns`|
|Object.create(null)|`524288`|`385.33ns ± 476.45ps`|`397.09ns`|`374.58ns - 397.92ns`|
|object literal (computed properties)|`524288`|`392.45ns ± 710.1ps`|`427.29ns`|`379.52ns - 444.92ns`|
|function constructor (freezed proto)|`524288`|`393.66ns ± 478.85ps`|`408.25ns`|`384.32ns - 410.6ns`|
|function constructor|`524288`|`398.03ns ± 628.83ps`|`414.85ns`|`383.41ns - 419.13ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`1.12ns ± 34.58ps`|`1.54ns`|`1.06ns - 5.48ns`|
|Object.create()|`524288`|`1.3ns ± 44.1ps`|`2.1ns`|`1.06ns - 5.66ns`|
|constructor|`524288`|`1.38ns ± 30.24ps`|`1.81ns`|`1.07ns - 1.83ns`|
|set prototype|`524288`|`1.47ns ± 30.55ps`|`1.84ns`|`1.06ns - 1.94ns`|
|set __proto__|`524288`|`36.49ns ± 325.55ps`|`44.98ns`|`33.57ns - 63.25ns`|
|Object.setPrototypeOf()|`524288`|`47.08ns ± 338.94ps`|`56.28ns`|`42.89ns - 57.13ns`|
|object spread|`524288`|`79.48ns ± 1.75ns`|`133.43ns`|`65.82ns - 135.82ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`65.85ns ± 1.1ns`|`97.52ns`|`50.74ns - 100.72ns`|
|Set|`1048576`|`170.69ns ± 2.72ns`|`262.05ns`|`132.62ns - 263.54ns`|
|Set direct assign|`1048576`|`241.06ns ± 3.74ns`|`343.99ns`|`187.22ns - 346.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`34.73ns ± 565.45ps`|`51.34ns`|`24.32ns - 52.13ns`|
|Set|`1048576`|`95.61ns ± 1.72ns`|`144.49ns`|`69.71ns - 158.63ns`|
|Set direct assign|`1048576`|`163.71ns ± 2.71ns`|`217.27ns`|`116.92ns - 225.77ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`52.65ns ± 775ps`|`75.53ns`|`37.75ns - 78.9ns`|
|Set|`1048576`|`171.01ns ± 1.42ns`|`279.48ns`|`150.25ns - 289.99ns`|
|Set direct assign|`1048576`|`216.56ns ± 1.72ns`|`362.41ns`|`196.92ns - 378ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`44.41ns ± 325.46ps`|`67.7ns`|`37.75ns - 71.62ns`|
|Set|`1048576`|`80.5ns ± 374.11ps`|`94.87ns`|`73.24ns - 98.3ns`|
|Set direct assign|`1048576`|`126.06ns ± 462.73ps`|`144.37ns`|`120.7ns - 218.86ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`90.68ns ± 270.48ps`|`99.02ns`|`82.64ns - 122.01ns`|
|Set|`1048576`|`185.98ns ± 1.61ns`|`325.01ns`|`170.07ns - 332.8ns`|
|Set direct assign|`1048576`|`247.34ns ± 1.24ns`|`289.06ns`|`225.48ns - 420.14ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`86.32ns ± 333.74ps`|`99.67ns`|`80.96ns - 118.03ns`|
|Array.includes()|`1048576`|`90.11ns ± 720.38ps`|`143.88ns`|`82.55ns - 146.13ns`|
|Set direct assign|`1048576`|`136.21ns ± 284.28ps`|`144.97ns`|`128.31ns - 145.42ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`162.3ns ± 1.43ns`|`259.26ns`|`144.97ns - 270.53ns`|
|Set|`1048576`|`300.79ns ± 2.54ns`|`506.23ns`|`278.83ns - 545.88ns`|
|Set direct assign|`1048576`|`365.82ns ± 2.88ns`|`483.44ns`|`333.15ns - 589.52ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`171.93ns ± 2.39ns`|`257.65ns`|`142.88ns - 259.99ns`|
|Set|`1048576`|`181.71ns ± 2.14ns`|`275.82ns`|`150.76ns - 283.37ns`|
|Set direct assign|`1048576`|`246.75ns ± 1.91ns`|`286.54ns`|`197.47ns - 335.49ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`81.23ns ± 1.61ns`|`124.61ns`|`66.32ns - 125.77ns`|
|Set|`524288`|`227.62ns ± 3.54ns`|`389.03ns`|`196.38ns - 391.05ns`|
|Set direct assign|`524288`|`302.6ns ± 4.82ns`|`529.36ns`|`278.43ns - 533.77ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`82.05ns ± 1.75ns`|`125.63ns`|`67.04ns - 126.25ns`|
|Set|`524288`|`155.32ns ± 3.27ns`|`247.35ns`|`123.48ns - 251.26ns`|
|Set direct assign|`524288`|`217.96ns ± 3.61ns`|`379.82ns`|`199.78ns - 385.01ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`141.95ns ± 1.68ns`|`236.26ns`|`130.78ns - 244.17ns`|
|Set|`524288`|`254.48ns ± 3.18ns`|`418.87ns`|`231.76ns - 429.75ns`|
|Set direct assign|`524288`|`328.48ns ± 3.15ns`|`569.01ns`|`307.99ns - 573.93ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`156.89ns ± 3.06ns`|`232.22ns`|`130.17ns - 238.94ns`|
|Set|`524288`|`164.14ns ± 3.67ns`|`259.05ns`|`135.56ns - 259.1ns`|
|Set direct assign|`524288`|`220.18ns ± 1.76ns`|`356.14ns`|`207.42ns - 379.45ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`239.57ns ± 2.35ns`|`406.73ns`|`228.19ns - 410.41ns`|
|Set|`524288`|`417.02ns ± 6.6ns`|`619.18ns`|`328.98ns - 625.97ns`|
|Set direct assign|`524288`|`465.4ns ± 8.5ns`|`840.31ns`|`414.89ns - 871.58ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`241.79ns ± 2.54ns`|`390.23ns`|`229.82ns - 411.03ns`|
|Set|`524288`|`244.54ns ± 2.32ns`|`332.2ns`|`205.34ns - 335.36ns`|
|Set direct assign|`524288`|`320.91ns ± 5.09ns`|`493.84ns`|`282.04ns - 499.18ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`387.08ns ± 7.48ns`|`642.77ns`|`343.34ns - 651.07ns`|
|Set|`524288`|`553.18ns ± 9.48ns`|`915.7ns`|`485.81ns - 939.58ns`|
|Set direct assign|`524288`|`623.19ns ± 6.33ns`|`782.88ns`|`565.83ns - 1.01μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`302.38ns ± 4.11ns`|`442.52ns`|`244.99ns - 452.42ns`|
|Set direct assign|`524288`|`370.86ns ± 5.06ns`|`552.22ns`|`321.57ns - 555.51ns`|
|Array.includes()|`524288`|`377.9ns ± 6.65ns`|`621.55ns`|`341.93ns - 622.69ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`715.8ns ± 11.32ns`|`796.15ns`|`644.65ns - 796.15ns`|
|Array.includes()|`131072`|`778.3ns ± 24.9ns`|`1.33μs`|`733.53ns - 1.33μs`|
|Set direct assign|`131072`|`1.05μs ± 4.16ns`|`1.13μs`|`1.01μs - 1.13μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`564.93ns ± 22.41ns`|`978.61ns`|`512.05ns - 978.61ns`|
|Array.includes()|`131072`|`762.05ns ± 15.81ns`|`1.25μs`|`731.21ns - 1.25μs`|
|Set direct assign|`131072`|`782.92ns ± 1.65ns`|`811.67ns`|`771.9ns - 811.67ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`834.4ns ± 1.2ns`|`854.25ns`|`821.32ns - 854.25ns`|
|Set direct assign|`131072`|`1.1μs ± 2.54ns`|`1.16μs`|`1.09μs - 1.16μs`|
|Array.includes()|`131072`|`1.16μs ± 39.72ns`|`2.04μs`|`1.09μs - 2.04μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`644.58ns ± 25.92ns`|`1.11μs`|`585.62ns - 1.11μs`|
|Set direct assign|`131072`|`877.29ns ± 23.63ns`|`1.59μs`|`836.63ns - 1.59μs`|
|Array.includes()|`131072`|`1.22μs ± 50.22ns`|`1.97μs`|`1.09μs - 1.97μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.46μs ± 35.82ns`|`2.43μs`|`1.37μs - 2.43μs`|
|Set direct assign|`131072`|`1.9μs ± 8.23ns`|`2.03μs`|`1.81μs - 2.03μs`|
|Array.includes()|`131072`|`2.04μs ± 1.87ns`|`2.08μs`|`2.03μs - 2.08μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.06μs ± 27.85ns`|`1.57μs`|`897.04ns - 1.57μs`|
|Set direct assign|`131072`|`1.35μs ± 26ns`|`1.54μs`|`1.12μs - 1.54μs`|
|Array.includes()|`131072`|`2.07μs ± 4.25ns`|`2.18μs`|`2.05μs - 2.18μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.06μs ± 23.76ns`|`2.36μs`|`1.93μs - 2.36μs`|
|Set direct assign|`131072`|`2.32μs ± 27.37ns`|`3.11μs`|`2.21μs - 3.11μs`|
|Array.includes()|`131072`|`4.25μs ± 16.17ns`|`4.64μs`|`4.2μs - 4.64μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.14μs ± 18.21ns`|`1.32μs`|`1.04μs - 1.32μs`|
|Set direct assign|`131072`|`1.47μs ± 28.42ns`|`1.67μs`|`1.29μs - 1.67μs`|
|Array.includes()|`131072`|`4.29μs ± 112.25ns`|`7.83μs`|`4.15μs - 7.83μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`107.46ns ± 1.64ns`|`174.56ns`|`97.02ns - 206.23ns`|
|await promise|`524288`|`133.05ns ± 740.58ps`|`171.02ns`|`121.68ns - 172.35ns`|
|await non-promise|`524288`|`145.48ns ± 23.21ns`|`1.44μs`|`93.71ns - 2.71μs`|
|async generator|`524288`|`645.23ns ± 1.37ns`|`693.63ns`|`626.16ns - 693.72ns`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`957.87ns ± 20.12ns`|`1.53μs`|`914.92ns - 1.53μs`|
|generator|`131072`|`1.92μs ± 11.97ns`|`2.19μs`|`1.85μs - 2.19μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`85.39ns ± 1.05ns`|`126.85ns`|`70.87ns - 137.76ns`|`85.39ns ± 11.43ns`|`348.27ns`|`172.7ns - 366.95ns`|
|map|`524288`|`107.49ns ± 1.09ns`|`158.26ns`|`95.25ns - 158.54ns`|`107.49ns ± 12.12ns`|`383.52ns`|`176.63ns - 1.1μs`|
|linked list map|`524288`|`121.28ns ± 1.37ns`|`177.11ns`|`107.74ns - 182.69ns`|`121.28ns ± 10.23ns`|`461.47ns`|`183.8ns - 502.03ns`|
|two object buckets|`524288`|`267.49ns ± 2.44ns`|`435.05ns`|`249.12ns - 447.13ns`|`267.49ns ± 3.78ns`|`424.61ns`|`208.24ns - 528.67ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`21.33ns ± 340.55ps`|`35.52ns`|`15.31ns - 39.26ns`|`21.33ns ± 703.76ns`|`19.62μs`|`165.47ns - 20.15μs`|
|map|`524288`|`21.72ns ± 378.7ps`|`33.72ns`|`10.83ns - 39.16ns`|`21.72ns ± 16.64ns`|`400.64ns`|`163.6ns - 425.31ns`|
|two map buckets|`524288`|`27.01ns ± 511.39ps`|`45.79ns`|`20.05ns - 52.35ns`|`27.01ns ± 17.19ns`|`434.38ns`|`170.5ns - 680.58ns`|
|two object buckets|`524288`|`97.74ns ± 484.49ps`|`112.14ns`|`87.06ns - 118.67ns`|`97.74ns ± 11.56ns`|`423.73ns`|`181.79ns - 537.6ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`57.86ns ± 657.05ps`|`84.3ns`|`48.24ns - 90.16ns`|`57.86ns ± 15.12ns`|`440.01ns`|`186.07ns - 502.99ns`|
|map|`524288`|`84.37ns ± 1.03ns`|`124ns`|`69.29ns - 126ns`|`84.37ns ± 12.77ns`|`424.08ns`|`173.07ns - 599.66ns`|
|linked list map|`524288`|`99.85ns ± 1.13ns`|`146.96ns`|`87.64ns - 149.03ns`|`99.85ns ± 12.66ns`|`451.13ns`|`194.27ns - 575.65ns`|
|two object buckets|`524288`|`187.81ns ± 1.9ns`|`307.98ns`|`168.29ns - 309.9ns`|`187.81ns ± 8.63ns`|`626.93ns`|`200.51ns - 947.98ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`86.41ns ± 965.03ps`|`131.59ns`|`72.07ns - 132.33ns`|`86.41ns ± 12.58ns`|`324.61ns`|`186.53ns - 423.21ns`|
|linked list map|`524288`|`115.76ns ± 620.04ps`|`134.42ns`|`103.86ns - 145.41ns`|`115.76ns ± 13.09ns`|`552.01ns`|`196.06ns - 758.43ns`|
|map|`524288`|`164.15ns ± 612.89ps`|`189.35ns`|`149.25ns - 200.16ns`|`164.15ns ± 7.95ns`|`581.41ns`|`180.33ns - 795.27ns`|
|two object buckets|`524288`|`275.16ns ± 2.28ns`|`432.81ns`|`257.98ns - 444.32ns`|`275.16ns ± 4.2ns`|`500.27ns`|`214.73ns - 571.98ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`22.26ns ± 456.48ps`|`38.42ns`|`16.7ns - 49.72ns`|`22.26ns ± 21.13ns`|`768.11ns`|`175.12ns - 956.6ns`|
|map|`524288`|`22.49ns ± 404.71ps`|`38.56ns`|`16.53ns - 38.87ns`|`22.49ns ± 18.54ns`|`418.1ns`|`172.84ns - 1.08μs`|
|two map buckets|`524288`|`37.5ns ± 606.67ps`|`60.08ns`|`28.93ns - 62.46ns`|`37.5ns ± 17.61ns`|`507.46ns`|`175.27ns - 512.82ns`|
|two object buckets|`524288`|`103.03ns ± 948.38ps`|`153.4ns`|`89.53ns - 155.7ns`|`103.03ns ± 12.74ns`|`490ns`|`193.09ns - 518.69ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`51.94ns ± 633.32ps`|`77.53ns`|`45.06ns - 86.06ns`|`51.94ns ± 17.13ns`|`461.28ns`|`189.75ns - 701.52ns`|
|linked list map|`524288`|`82.55ns ± 780.53ps`|`126.67ns`|`73.89ns - 132.18ns`|`82.55ns ± 15.39ns`|`638.17ns`|`189.6ns - 699.13ns`|
|map|`524288`|`134.35ns ± 2.11ns`|`232.11ns`|`109.66ns - 266.92ns`|`134.35ns ± 9.49ns`|`399.61ns`|`171.65ns - 881.53ns`|
|two object buckets|`524288`|`203.12ns ± 2.3ns`|`327.79ns`|`186.26ns - 329.34ns`|`203.12ns ± 6.28ns`|`425.01ns`|`221.7ns - 544.89ns`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`93.06ns ± 1.31ns`|`157.08ns`|`78.35ns - 175.19ns`|`93.06ns ± 16.2ns`|`491.52ns`|`207.33ns - 1.06μs`|
|linked list map|`524288`|`144.24ns ± 2.02ns`|`244.67ns`|`126.81ns - 288.8ns`|`144.24ns ± 12.62ns`|`540.56ns`|`223.16ns - 675.46ns`|
|two object buckets|`524288`|`300.13ns ± 2.44ns`|`446.89ns`|`279.46ns - 464.48ns`|`300.13ns ± 9.56ns`|`507.3ns`|`245.4ns - 1.45μs`|
|map|`524288`|`303.1ns ± 4.39ns`|`550.7ns`|`257.1ns - 601.94ns`|`303.1ns ± 5.52ns`|`445.13ns`|`206.92ns - 556.15ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`31.22ns ± 566.18ps`|`58.9ns`|`26.83ns - 59.48ns`|`31.22ns ± 28.45ns`|`986.78ns`|`196.62ns - 1.94μs`|
|map|`524288`|`31.68ns ± 471.14ps`|`51.42ns`|`21.95ns - 55.4ns`|`31.68ns ± 19.41ns`|`368.94ns`|`206.31ns - 429.53ns`|
|two map buckets|`524288`|`31.71ns ± 285.71ps`|`42.19ns`|`26.37ns - 44.71ns`|`31.71ns ± 22.77ns`|`598.81ns`|`203.49ns - 982.24ns`|
|two object buckets|`524288`|`97.33ns ± 1.06ns`|`142.22ns`|`66.57ns - 148.3ns`|`97.33ns ± 16.85ns`|`497.03ns`|`229.58ns - 826.12ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`54.96ns ± 384.21ps`|`66.53ns`|`46.88ns - 80.15ns`|`54.96ns ± 20.82ns`|`472.01ns`|`228.59ns - 534.64ns`|
|linked list map|`524288`|`103.74ns ± 1.36ns`|`157.73ns`|`91.9ns - 158.5ns`|`103.74ns ± 20.56ns`|`785.94ns`|`240.1ns - 880.2ns`|
|two object buckets|`524288`|`158.94ns ± 2.07ns`|`237.1ns`|`135.51ns - 255.97ns`|`158.94ns ± 24.7ns`|`881.15ns`|`262.71ns - 1.28μs`|
|map|`524288`|`263.92ns ± 3.51ns`|`477.67ns`|`217.96ns - 478.7ns`|`263.92ns ± 7.44ns`|`647.4ns`|`217.66ns - 953.07ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`86.87ns ± 1.12ns`|`130.68ns`|`70.93ns - 132.68ns`|`86.87ns ± 28.29ns`|`728.17ns`|`324.63ns - 735.26ns`|
|linked list map|`524288`|`201.38ns ± 5.58ns`|`393.88ns`|`137.61ns - 458.16ns`|`201.38ns ± 23.55ns`|`1.28μs`|`321.01ns - 1.45μs`|
|two object buckets|`524288`|`218.07ns ± 3.7ns`|`310.52ns`|`181.22ns - 403.12ns`|`218.07ns ± 23.99ns`|`782.33ns`|`406.68ns - 1.01μs`|
|map|`524288`|`1.74μs ± 74.14ns`|`7.54μs`|`1.36μs - 7.62μs`|`1.74μs ± 109.34ns`|`705.8ns`|`409.63ns - 798.76ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`27.19ns ± 711.08ps`|`74.24ns`|`16.59ns - 79.12ns`|`27.19ns ± 44.88ns`|`1.1μs`|`423.42ns - 1.17μs`|
|linked list map|`524288`|`49.35ns ± 1ns`|`95.64ns`|`37.16ns - 118.57ns`|`49.35ns ± 45.06ns`|`1.06μs`|`463.08ns - 1.26μs`|
|map|`524288`|`70.47ns ± 678.21ps`|`103.22ns`|`58.6ns - 116.75ns`|`70.47ns ± 38.9ns`|`693.3ns`|`374.39ns - 849.35ns`|
|two object buckets|`524288`|`78.78ns ± 872.02ps`|`108.22ns`|`66.91ns - 169.74ns`|`78.78ns ± 44ns`|`850.34ns`|`484.41ns - 912.07ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`42.27ns ± 664.65ps`|`73.93ns`|`30.69ns - 77.05ns`|`42.27ns ± 61.55ns`|`1.2μs`|`554.34ns - 1.47μs`|
|linked list map|`524288`|`51.14ns ± 607.5ps`|`80.22ns`|`44.72ns - 80.51ns`|`51.14ns ± 54.01ns`|`903.32ns`|`530.73ns - 954.63ns`|
|map|`524288`|`70.72ns ± 491.22ps`|`84.45ns`|`61.57ns - 96.02ns`|`70.72ns ± 59.19ns`|`1.11μs`|`558.06ns - 1.58μs`|
|two object buckets|`524288`|`197.08ns ± 1.98ns`|`295.57ns`|`164.2ns - 326.09ns`|`197.08ns ± 46.72ns`|`1.04μs`|`566.78ns - 1.21μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`428.61ns ± 4.17ns`|`616.84ns`|`366.17ns - 998.4ns`|
|new Headers().set()|`1048576`|`510.8ns ± 4.85ns`|`718.3ns`|`371.94ns - 910.13ns`|
|new Headers().append()|`1048576`|`548.22ns ± 5.65ns`|`752.1ns`|`390.28ns - 1μs`|
|header pairs|`1048576`|`580.35ns ± 4.65ns`|`770.75ns`|`488.3ns - 953.6ns`|
|new Headers(record)|`1048576`|`682.18ns ± 5.98ns`|`881.35ns`|`502.96ns - 1.15μs`|
|new Headers(pairs)|`1048576`|`738.7ns ± 5.77ns`|`966.88ns`|`571.8ns - 1.33μs`|

