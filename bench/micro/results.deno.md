# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`623.01ps ± 85.57ps`|`437.74ps`|`374.02ps - 763.09ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`38.14ns ± 961.72ps`|`68.71ns`|`18.46ns - 68.79ns`|
|regex|`524288`|`104.64ns ± 1.14ns`|`174.95ns`|`89.52ns - 183.89ns`|
|fp|`524288`|`297.91ns ± 6.2ns`|`516.04ns`|`259.67ns - 516.86ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`157.83ns ± 2.43ns`|`276.83ns`|`131.43ns - 281.54ns`|
|fp & procedural filter|`524288`|`304.77ns ± 4.72ns`|`488.99ns`|`279.43ns - 489.37ns`|
|fp|`524288`|`568.04ns ± 11.11ns`|`923.12ns`|`475.71ns - 1.06μs`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`3.28ns ± 518.07ps`|`31.52ns`|`1.34ns - 33.43ns`|
|polymorphic array|`524288`|`3.56ns ± 420.16ps`|`28.77ns`|`1.42ns - 32.71ns`|
|polymorphic object|`524288`|`6.27ns ± 818.89ps`|`33.39ns`|`1.82ns - 50.23ns`|
|monomorphic object|`524288`|`9.43ns ± 1ns`|`30.34ns`|`1.43ns - 31.81ns`|
|megamorphic object|`524288`|`22.53ns ± 1.01ns`|`53.5ns`|`11.53ns - 115.66ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`8.43ns ± 600.05ps`|`29.03ns`|`2.39ns - 31.21ns`|
|monomorphic object|`524288`|`10.65ns ± 521.62ps`|`28.67ns`|`3.92ns - 30.51ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.3ns ± 216.93ps`|`18.27ns`|`5.82ns - 31.08ns`|
|prototype chain (override prototype)|`524288`|`12.77ns ± 234.06ps`|`22.73ns`|`9.06ns - 35.64ns`|
|WeakMap store|`524288`|`13.64ns ± 367.62ps`|`27.73ns`|`7.15ns - 34.04ns`|
|prototype chain (create with prototype)|`524288`|`14.44ns ± 250.42ps`|`21.87ns`|`10.37ns - 39.16ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`120.29ns ± 1.08ns`|`175.96ns`|`112.11ns - 177.67ns`|
|Object.create(null)|`524288`|`244.5ns ± 1.24ns`|`316.06ns`|`230.36ns - 342.15ns`|
|object literal (computed properties)|`524288`|`986.2ns ± 6.22ns`|`1.1μs`|`903.54ns - 1.11μs`|
|function constructor|`524288`|`1.03μs ± 6.86ns`|`1.23μs`|`954.03ns - 1.25μs`|
|object literal|`524288`|`1.04μs ± 5.98ns`|`1.15μs`|`965.35ns - 1.17μs`|
|function constructor (freezed proto)|`524288`|`1.04μs ± 7.19ns`|`1.2μs`|`911.69ns - 1.23μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`4.17ns ± 1.04ns`|`54.62ns`|`1.23ns - 103.58ns`|
|set prototype|`524288`|`8.41ns ± 550.11ps`|`56.61ns`|`1.99ns - 56.61ns`|
|function constructor|`524288`|`10.51ns ± 1.76ns`|`141.78ns`|`1.75ns - 147.56ns`|
|Object.create()|`524288`|`45.63ns ± 2.49ns`|`170.77ns`|`2.49ns - 171.46ns`|
|Object.setPrototypeOf()|`524288`|`207.01ns ± 3.27ns`|`373.1ns`|`188.08ns - 373.78ns`|
|set __proto__|`524288`|`282.98ns ± 6.04ns`|`400.08ns`|`166.85ns - 403.66ns`|
|object spread|`524288`|`584.57ns ± 9.15ns`|`1.09μs`|`539.93ns - 1.09μs`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`58.1ns ± 773.15ps`|`95.38ns`|`32.19ns - 134ns`|
|Set|`1048576`|`154.37ns ± 632.51ps`|`194.31ns`|`128.51ns - 269.1ns`|
|Set direct assign|`1048576`|`168.97ns ± 843.59ps`|`191.16ns`|`150.8ns - 301.9ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`58.44ns ± 635.83ps`|`93.21ns`|`43.65ns - 112.29ns`|
|Set|`1048576`|`92.12ns ± 666.65ps`|`143.73ns`|`77.74ns - 149.45ns`|
|Set direct assign|`1048576`|`103.89ns ± 519.56ps`|`120.07ns`|`89.85ns - 173.87ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`133.38ns ± 696.24ps`|`211.26ns`|`114.27ns - 216.35ns`|
|Set|`1048576`|`171.66ns ± 647.12ps`|`194.03ns`|`150.29ns - 296.92ns`|
|Set direct assign|`1048576`|`185.48ns ± 833.96ps`|`193.38ns`|`175.54ns - 333.5ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`97.81ns ± 579.45ps`|`151.2ns`|`73.24ns - 155.72ns`|
|Set direct assign|`1048576`|`111.82ns ± 792.8ps`|`177.21ns`|`92.99ns - 181.88ns`|
|Array.includes()|`1048576`|`131.23ns ± 477.72ps`|`155.68ns`|`123.79ns - 217.28ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`210.34ns ± 1.92ns`|`371.88ns`|`192.72ns - 402.97ns`|
|Set direct assign|`1048576`|`217.98ns ± 1.7ns`|`360.59ns`|`194.51ns - 390.2ns`|
|Array.includes()|`1048576`|`238.82ns ± 1.85ns`|`413.15ns`|`211.49ns - 444.46ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`105.99ns ± 359.28ps`|`116.98ns`|`100.18ns - 163.9ns`|
|Set direct assign|`1048576`|`117.95ns ± 874.94ps`|`187.74ns`|`105.65ns - 198.59ns`|
|Array.includes()|`1048576`|`234.12ns ± 1.05ns`|`287.8ns`|`213.66ns - 399.64ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`267.28ns ± 872.52ps`|`321.85ns`|`252.99ns - 404.16ns`|
|Set|`1048576`|`346.33ns ± 3.87ns`|`506.24ns`|`307.24ns - 568.04ns`|
|Array.includes()|`1048576`|`435.2ns ± 527.61ps`|`457.07ns`|`409.72ns - 520.97ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`125.79ns ± 741.52ps`|`176.88ns`|`116.09ns - 205.34ns`|
|Set|`1048576`|`172.03ns ± 650.16ps`|`193.13ns`|`154.56ns - 320.87ns`|
|Array.includes()|`1048576`|`464.21ns ± 4.97ns`|`691.16ns`|`419.22ns - 823.82ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`236.01ns ± 3.48ns`|`409.08ns`|`212.15ns - 411.66ns`|
|Array.includes()|`524288`|`240.43ns ± 2.17ns`|`392.01ns`|`218.22ns - 393.84ns`|
|Set direct assign|`524288`|`256.66ns ± 3.5ns`|`446.78ns`|`228.91ns - 449.89ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`164.55ns ± 2.64ns`|`257.97ns`|`134.57ns - 261.75ns`|
|Set direct assign|`524288`|`173.97ns ± 1.38ns`|`257.79ns`|`164.14ns - 293.84ns`|
|Array.includes()|`524288`|`243ns ± 3.12ns`|`395.59ns`|`220.07ns - 399.05ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`272.6ns ± 2.96ns`|`439.73ns`|`252.1ns - 451.9ns`|
|Set direct assign|`524288`|`280.29ns ± 2ns`|`394.4ns`|`257.57ns - 427.26ns`|
|Array.includes()|`524288`|`516.48ns ± 7.26ns`|`862.89ns`|`469.62ns - 919.81ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`171.34ns ± 2.07ns`|`278.22ns`|`145.23ns - 281.47ns`|
|Set direct assign|`524288`|`181.79ns ± 1.89ns`|`299.95ns`|`154.3ns - 307.45ns`|
|Array.includes()|`524288`|`513.26ns ± 6.43ns`|`774.05ns`|`468.58ns - 777.85ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`329.35ns ± 926.26ps`|`356.22ns`|`313.27ns - 425.8ns`|
|Set|`524288`|`383.84ns ± 4ns`|`672.73ns`|`367.01ns - 677.32ns`|
|Array.includes()|`524288`|`1.02μs ± 5.46ns`|`1.43μs`|`993.83ns - 1.46μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`188.98ns ± 1.48ns`|`272.39ns`|`171.38ns - 284.88ns`|
|Set|`524288`|`230.66ns ± 1.35ns`|`291.62ns`|`215.77ns - 383.2ns`|
|Array.includes()|`524288`|`1.02μs ± 8.88ns`|`1.55μs`|`997.93ns - 1.95μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`359.65ns ± 2.7ns`|`562.93ns`|`332.04ns - 574.5ns`|
|Set direct assign|`524288`|`522.85ns ± 652.94ps`|`543.92ns`|`500.44ns - 587.07ns`|
|Set|`524288`|`575.63ns ± 4.68ns`|`827.77ns`|`558.36ns - 1.02μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`294.46ns ± 1.91ns`|`402.91ns`|`278.32ns - 498.11ns`|
|Set|`524288`|`356.88ns ± 4.67ns`|`499.85ns`|`314.79ns - 560.6ns`|
|Array.includes()|`524288`|`900.72ns ± 7.05ns`|`1.23μs`|`881.66ns - 1.72μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`739.29ns ± 22.17ns`|`1.29μs`|`671.37ns - 1.29μs`|
|Set direct assign|`131072`|`793.98ns ± 14.52ns`|`1.07μs`|`724.31ns - 1.07μs`|
|Array.includes()|`131072`|`4.16μs ± 39.48ns`|`4.54μs`|`3.86μs - 4.54μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`556.53ns ± 1.4ns`|`568.93ns`|`534.19ns - 568.93ns`|
|Set direct assign|`131072`|`625.78ns ± 12.17ns`|`815.08ns`|`538.98ns - 815.08ns`|
|Array.includes()|`131072`|`4.11μs ± 34.32ns`|`4.51μs`|`3.99μs - 4.51μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`895.44ns ± 1.57ns`|`934.19ns`|`887.59ns - 934.19ns`|
|Set direct assign|`131072`|`989.92ns ± 12.64ns`|`1.11μs`|`922.64ns - 1.11μs`|
|Array.includes()|`131072`|`4.65μs ± 38.16ns`|`4.96μs`|`4.33μs - 4.96μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`667.25ns ± 1.58ns`|`693.77ns`|`654.54ns - 693.77ns`|
|Set direct assign|`131072`|`747.1ns ± 10.3ns`|`835.91ns`|`684.68ns - 835.91ns`|
|Array.includes()|`131072`|`4.64μs ± 37.94ns`|`4.98μs`|`4.48μs - 4.98μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.41μs ± 13.93ns`|`1.52μs`|`1.33μs - 1.52μs`|
|Set|`131072`|`1.45μs ± 25.24ns`|`1.64μs`|`1.31μs - 1.64μs`|
|Array.includes()|`131072`|`6.24μs ± 38.63ns`|`6.58μs`|`5.93μs - 6.58μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`858.82ns ± 20.77ns`|`1.49μs`|`826.36ns - 1.49μs`|
|Set direct assign|`131072`|`915.49ns ± 10.49ns`|`1.01μs`|`860.62ns - 1.01μs`|
|Array.includes()|`131072`|`6.26μs ± 39.77ns`|`6.61μs`|`5.94μs - 6.61μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.21μs ± 13.98ns`|`2.36μs`|`2.08μs - 2.36μs`|
|Set|`131072`|`2.23μs ± 24.51ns`|`2.42μs`|`2.09μs - 2.42μs`|
|Array.includes()|`131072`|`17.31μs ± 42.93ns`|`17.67μs`|`16.9μs - 17.67μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.24μs ± 12.42ns`|`1.42μs`|`1.17μs - 1.42μs`|
|Set|`131072`|`1.3μs ± 22.73ns`|`1.47μs`|`1.18μs - 1.47μs`|
|Array.includes()|`131072`|`17.36μs ± 43.86ns`|`17.63μs`|`16.91μs - 17.63μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`131.77ns ± 1.18ns`|`186.74ns`|`120.46ns - 187.06ns`|
|await non-promise|`524288`|`145.16ns ± 1.2ns`|`204.43ns`|`132.52ns - 207.05ns`|
|generator|`524288`|`157.57ns ± 1.23ns`|`228.06ns`|`143.95ns - 230.05ns`|
|async generator|`524288`|`639.62ns ± 13.38ns`|`1.38μs`|`201.14ns - 1.6μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.4μs ± 43.56ns`|`2.51μs`|`923.4ns - 2.51μs`|
|generator|`131072`|`2.03μs ± 26.23ns`|`2.85μs`|`1.97μs - 2.85μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`161.35ns ± 917.37ps`|`188.13ns`|`149.01ns - 241.01ns`|`161.35ns ± 92.88ns`|`1.29μs`|`1.12μs - 1.67μs`|
|map|`524288`|`203.31ns ± 2.07ns`|`295.87ns`|`181.89ns - 299.58ns`|`203.31ns ± 87.98ns`|`1.33μs`|`1.09μs - 1.44μs`|
|linked list map|`524288`|`231.27ns ± 2.05ns`|`319.32ns`|`211.53ns - 333.41ns`|`231.27ns ± 87.22ns`|`1.39μs`|`1.09μs - 1.41μs`|
|two object buckets|`524288`|`275.19ns ± 3.72ns`|`433.38ns`|`243.87ns - 433.88ns`|`275.19ns ± 84.51ns`|`2.06μs`|`1.11μs - 2.08μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`25.08ns ± 448.76ps`|`60.17ns`|`15.58ns - 60.45ns`|`25.08ns ± 115ns`|`1.54μs`|`1.23μs - 1.91μs`|
|linked list map|`524288`|`26.58ns ± 349.73ps`|`34.95ns`|`18.66ns - 57.85ns`|`26.58ns ± 116.75ns`|`1.52μs`|`1.22μs - 1.64μs`|
|two map buckets|`524288`|`37.93ns ± 557.69ps`|`72.17ns`|`29.06ns - 81.44ns`|`37.93ns ± 105.8ns`|`1.44μs`|`1.02μs - 1.48μs`|
|two object buckets|`524288`|`47.57ns ± 302.67ps`|`60.55ns`|`41ns - 68ns`|`47.57ns ± 103.9ns`|`1.36μs`|`1.13μs - 1.46μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`61.45ns ± 318.03ps`|`67.78ns`|`56.95ns - 88.36ns`|`61.45ns ± 102.11ns`|`1.3μs`|`1.03μs - 1.36μs`|
|two object buckets|`524288`|`91.32ns ± 778.52ps`|`133.27ns`|`73.9ns - 150.35ns`|`91.32ns ± 99.35ns`|`1.35μs`|`1.13μs - 1.41μs`|
|map|`524288`|`92.35ns ± 885.28ps`|`149.57ns`|`77.39ns - 157.86ns`|`92.35ns ± 101.72ns`|`1.35μs`|`1.14μs - 1.35μs`|
|linked list map|`524288`|`126.17ns ± 700.04ps`|`161.33ns`|`103.06ns - 161.41ns`|`126.17ns ± 100.36ns`|`1.4μs`|`1.14μs - 1.44μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`162.95ns ± 595.42ps`|`179.61ns`|`149.77ns - 195.79ns`|`162.95ns ± 92.15ns`|`1.32μs`|`1.11μs - 1.37μs`|
|linked list map|`524288`|`223.15ns ± 1.02ns`|`280.1ns`|`199.66ns - 306ns`|`223.15ns ± 87.25ns`|`1.3μs`|`1.13μs - 1.33μs`|
|map|`524288`|`233.45ns ± 2.29ns`|`334.43ns`|`212.52ns - 342.51ns`|`233.45ns ± 84.84ns`|`1.29μs`|`1.12μs - 1.31μs`|
|two object buckets|`524288`|`270.53ns ± 3.54ns`|`399.01ns`|`238.02ns - 403.05ns`|`270.53ns ± 82.29ns`|`1.28μs`|`1.11μs - 1.3μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.79ns ± 388.64ps`|`54.45ns`|`23.72ns - 60.67ns`|`27.79ns ± 115.03ns`|`1.53μs`|`1.22μs - 1.91μs`|
|linked list map|`524288`|`33.75ns ± 617.22ps`|`70.07ns`|`27.4ns - 100.91ns`|`33.75ns ± 114.37ns`|`1.67μs`|`1.19μs - 1.82μs`|
|two map buckets|`524288`|`47.66ns ± 406.67ps`|`68.84ns`|`38.94ns - 78.94ns`|`47.66ns ± 104.67ns`|`1.43μs`|`1.13μs - 1.58μs`|
|two object buckets|`524288`|`53.85ns ± 425.32ps`|`74.56ns`|`46.94ns - 92.76ns`|`53.85ns ± 103.44ns`|`1.33μs`|`1.14μs - 1.36μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.1ns ± 308.86ps`|`74.75ns`|`61.56ns - 89.75ns`|`65.1ns ± 103.76ns`|`1.42μs`|`1.14μs - 2.09μs`|
|two object buckets|`524288`|`85.2ns ± 409.73ps`|`93.81ns`|`69.25ns - 121.77ns`|`85.2ns ± 100.37ns`|`1.31μs`|`1.13μs - 1.34μs`|
|map|`524288`|`119.44ns ± 471.51ps`|`143.64ns`|`111.29ns - 144.21ns`|`119.44ns ± 97.77ns`|`1.31μs`|`1.12μs - 1.31μs`|
|linked list map|`524288`|`126.04ns ± 596.38ps`|`154.96ns`|`117.47ns - 159.38ns`|`126.04ns ± 98.09ns`|`1.35μs`|`1.15μs - 1.36μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`160.9ns ± 2.33ns`|`206.2ns`|`134.06ns - 293.73ns`|`160.9ns ± 95.45ns`|`1.36μs`|`1.15μs - 1.41μs`|
|linked list map|`524288`|`229.68ns ± 1.97ns`|`277.62ns`|`198.74ns - 280.2ns`|`229.68ns ± 89.79ns`|`1.32μs`|`1.17μs - 1.34μs`|
|two object buckets|`524288`|`260.1ns ± 2.92ns`|`396.69ns`|`226.58ns - 430.88ns`|`260.1ns ± 88.02ns`|`1.33μs`|`1.17μs - 1.46μs`|
|map|`524288`|`448.96ns ± 3.68ns`|`553.8ns`|`361.28ns - 555.3ns`|`448.96ns ± 69.43ns`|`1.55μs`|`1.1μs - 1.58μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`34.76ns ± 411.18ps`|`66.06ns`|`25.14ns - 68.44ns`|`34.76ns ± 116.11ns`|`1.42μs`|`1.22μs - 1.42μs`|
|map|`524288`|`39.27ns ± 400.88ps`|`48.19ns`|`27.6ns - 78.85ns`|`39.27ns ± 112.7ns`|`1.42μs`|`1.24μs - 1.46μs`|
|two map buckets|`524288`|`60.88ns ± 413.75ps`|`85.58ns`|`55.43ns - 88.17ns`|`60.88ns ± 106.48ns`|`1.41μs`|`1.16μs - 1.41μs`|
|two object buckets|`524288`|`63.46ns ± 379.16ps`|`72.57ns`|`44.64ns - 88.86ns`|`63.46ns ± 107.05ns`|`1.61μs`|`1.17μs - 1.83μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`67.38ns ± 255.23ps`|`72.96ns`|`63.97ns - 88.99ns`|`67.38ns ± 106.77ns`|`1.44μs`|`1.18μs - 1.76μs`|
|two object buckets|`524288`|`86.19ns ± 579.5ps`|`121.91ns`|`79.08ns - 122.9ns`|`86.19ns ± 105.97ns`|`1.63μs`|`1.18μs - 1.85μs`|
|linked list map|`524288`|`129.9ns ± 451.52ps`|`151.78ns`|`109.25ns - 156.15ns`|`129.9ns ± 104.38ns`|`1.42μs`|`1.21μs - 1.46μs`|
|map|`524288`|`306.1ns ± 1.38ns`|`355.64ns`|`269.7ns - 409.98ns`|`306.1ns ± 87.96ns`|`1.5μs`|`1.17μs - 1.63μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`174.81ns ± 2.53ns`|`295.75ns`|`146.83ns - 295.92ns`|`174.81ns ± 101.66ns`|`1.47μs`|`1.23μs - 1.52μs`|
|linked list map|`524288`|`290.4ns ± 4.03ns`|`393.06ns`|`251.57ns - 500.54ns`|`290.4ns ± 102.47ns`|`1.53μs`|`1.36μs - 1.55μs`|
|two object buckets|`524288`|`313.21ns ± 6.49ns`|`595.93ns`|`266.89ns - 605.67ns`|`313.21ns ± 106.3ns`|`1.63μs`|`1.42μs - 1.64μs`|
|map|`524288`|`1.74μs ± 4.84ns`|`1.9μs`|`1.56μs - 2.02μs`|`1.74μs ± 32.39ns`|`1.45μs`|`1.28μs - 1.47μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`25.78ns ± 363.04ps`|`33.31ns`|`21.42ns - 65.16ns`|`25.78ns ± 136.12ns`|`1.72μs`|`1.44μs - 1.77μs`|
|two map buckets|`524288`|`32.24ns ± 445.61ps`|`66.39ns`|`23.62ns - 69.65ns`|`32.24ns ± 148.38ns`|`1.95μs`|`1.55μs - 1.95μs`|
|linked list map|`524288`|`59.08ns ± 367ps`|`71.01ns`|`54.97ns - 91.42ns`|`59.08ns ± 136.5ns`|`1.81μs`|`1.51μs - 1.82μs`|
|map|`524288`|`121.84ns ± 366.22ps`|`138.63ns`|`115.11ns - 141.72ns`|`121.84ns ± 130.7ns`|`1.74μs`|`1.47μs - 1.77μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`44.25ns ± 379.22ps`|`55.66ns`|`40.61ns - 80.14ns`|`44.25ns ± 170.66ns`|`2.18μs`|`1.72μs - 2.19μs`|
|two object buckets|`524288`|`48.14ns ± 524.06ps`|`68.46ns`|`27.43ns - 89.77ns`|`48.14ns ± 157.99ns`|`2.45μs`|`1.63μs - 2.46μs`|
|linked list map|`524288`|`65.85ns ± 586.53ps`|`88.3ns`|`58.66ns - 94.39ns`|`65.85ns ± 150.19ns`|`2.14μs`|`1.53μs - 2.25μs`|
|map|`524288`|`121.61ns ± 441.14ps`|`136.76ns`|`112.76ns - 148.26ns`|`121.61ns ± 136.44ns`|`1.83μs`|`1.53μs - 1.87μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`874.07ns ± 4.26ns`|`1.29μs`|`783.41ns - 1.35μs`|
|header pairs|`1048576`|`1.01μs ± 6.67ns`|`1.34μs`|`890.75ns - 2.22μs`|
|new Headers().append()|`1048576`|`1.31μs ± 14.21ns`|`2.76μs`|`1.2μs - 3.14μs`|
|new Headers().set()|`1048576`|`1.34μs ± 8.82ns`|`2.01μs`|`1.23μs - 2.68μs`|
|new Headers(pairs)|`1048576`|`1.62μs ± 8.59ns`|`2.06μs`|`1.49μs - 3.06μs`|
|new Headers(record)|`1048576`|`1.73μs ± 12.28ns`|`2.67μs`|`1.63μs - 3.37μs`|

