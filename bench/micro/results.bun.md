# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`394.86ps ± 3.58ps`|`1.84ns`|`317.87ps - 9.46ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`1.62ns ± 61.41ps`|`5.93ns`|`1.11ns - 7.18ns`|
|polymorphic array|`524288`|`1.66ns ± 55.33ps`|`2.93ns`|`1.09ns - 7.62ns`|
|monomorphic object|`524288`|`1.97ns ± 111.01ps`|`6.16ns`|`1.48ns - 6.5ns`|
|polymorphic object|`524288`|`2.49ns ± 67.8ps`|`8.06ns`|`2.32ns - 8.66ns`|
|megamorphic object|`524288`|`7.99ns ± 107.69ps`|`14.62ns`|`7.59ns - 14.77ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`2.25ns ± 51.43ps`|`5.2ns`|`1.95ns - 5.22ns`|
|monomorphic object|`524288`|`3ns ± 54.99ps`|`5.38ns`|`2.76ns - 9.23ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.46ns ± 111.61ps`|`16.57ns`|`9.05ns - 16.9ns`|
|WeakMap store|`524288`|`14.7ns ± 279.45ps`|`23.49ns`|`6.45ns - 25.96ns`|
|prototype chain (override prototype)|`524288`|`24.32ns ± 104.12ps`|`30.69ns`|`23.78ns - 31.58ns`|
|prototype chain (create with prototype)|`524288`|`27.19ns ± 598.32ps`|`49.82ns`|`23.78ns - 56.07ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`50.43ns ± 748.64ps`|`93.66ns`|`45.8ns - 125.62ns`|
|Object.create(null)|`524288`|`319.95ns ± 2.99ns`|`453.24ns`|`305.38ns - 610.16ns`|
|object literal (computed properties)|`524288`|`322.01ns ± 2.28ns`|`424.46ns`|`308.95ns - 524.95ns`|
|object literal|`524288`|`322.06ns ± 2.94ns`|`571.35ns`|`307.65ns - 581.86ns`|
|function constructor|`524288`|`349.14ns ± 4.29ns`|`656.52ns`|`331.1ns - 717.48ns`|
|function constructor (freezed proto)|`524288`|`351.21ns ± 3.8ns`|`553.8ns`|`329.43ns - 612ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`957.04ps ± 0.56ps`|`978.52ps`|`946.53ps - 983.15ps`|
|constructor|`524288`|`961.63ps ± 1.87ps`|`1.04ns`|`944.09ps - 1.13ns`|
|Object.create()|`524288`|`968.89ps ± 4.95ps`|`1.27ns`|`941.65ps - 1.34ns`|
|set prototype|`524288`|`1.01ns ± 49.65ps`|`2.09ns`|`944.09ps - 7.24ns`|
|set __proto__|`524288`|`30.24ns ± 233.14ps`|`37.4ns`|`29.26ns - 52.9ns`|
|Object.setPrototypeOf()|`524288`|`39.93ns ± 258.52ps`|`48.2ns`|`38.29ns - 50.53ns`|
|object spread|`524288`|`162.05ns ± 731.34ps`|`217.44ns`|`155.72ns - 225.48ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`34.83ns ± 783.09ps`|`55.35ns`|`23.11ns - 59.93ns`|
|Set|`1048576`|`166.66ns ± 2ns`|`299.45ns`|`148.74ns - 305.55ns`|
|Set direct assign|`1048576`|`284.59ns ± 5.39ns`|`472.27ns`|`233.62ns - 554.95ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`34.74ns ± 818.17ps`|`56.06ns`|`23.08ns - 89.17ns`|
|Set|`1048576`|`135.59ns ± 3.02ns`|`253.27ns`|`96.02ns - 400.69ns`|
|Set direct assign|`1048576`|`222.26ns ± 5.15ns`|`400.86ns`|`170.2ns - 820.3ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`41.9ns ± 646.91ps`|`77.57ns`|`37.57ns - 100.49ns`|
|Set|`1048576`|`179.45ns ± 1.42ns`|`338.44ns`|`168.5ns - 345.33ns`|
|Set direct assign|`1048576`|`301.92ns ± 5.2ns`|`522.52ns`|`261.48ns - 589.41ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`39.18ns ± 295.1ps`|`45.75ns`|`36.63ns - 94.88ns`|
|Set|`1048576`|`118.13ns ± 1.1ns`|`173.64ns`|`109.94ns - 294.14ns`|
|Set direct assign|`1048576`|`197.92ns ± 1.87ns`|`354.34ns`|`183.83ns - 468.6ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`99.87ns ± 1.92ns`|`183.56ns`|`80.41ns - 296.38ns`|
|Set|`1048576`|`201.12ns ± 2.18ns`|`378.4ns`|`184.28ns - 386.03ns`|
|Set direct assign|`1048576`|`288.27ns ± 2.81ns`|`551.06ns`|`274.39ns - 562.07ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`101.58ns ± 1.94ns`|`186.1ns`|`79.13ns - 250.18ns`|
|Set|`1048576`|`122.74ns ± 1.47ns`|`270.23ns`|`114.06ns - 352.42ns`|
|Set direct assign|`1048576`|`199.14ns ± 1.67ns`|`359.77ns`|`187.1ns - 412.82ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`169.54ns ± 2.58ns`|`326.45ns`|`148.98ns - 331.71ns`|
|Set|`1048576`|`321.15ns ± 3.62ns`|`601.27ns`|`294.58ns - 629.8ns`|
|Set direct assign|`1048576`|`393.56ns ± 606.92ps`|`416.36ns`|`381.38ns - 478.5ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`158.8ns ± 1.14ns`|`197.94ns`|`142.96ns - 330.7ns`|
|Set|`1048576`|`220.82ns ± 2.83ns`|`387.39ns`|`193.97ns - 439.89ns`|
|Set direct assign|`1048576`|`276.45ns ± 1.86ns`|`354.69ns`|`265.79ns - 541.19ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`85.41ns ± 2.56ns`|`157.61ns`|`69.95ns - 157.82ns`|
|Set|`524288`|`267.08ns ± 4.07ns`|`510.8ns`|`253.32ns - 511.05ns`|
|Set direct assign|`524288`|`434.75ns ± 2.73ns`|`503.54ns`|`422.15ns - 762.2ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`74.93ns ± 1.67ns`|`148.34ns`|`66.67ns - 151.41ns`|
|Set|`524288`|`199.48ns ± 1.44ns`|`251.61ns`|`191ns - 365.61ns`|
|Set direct assign|`524288`|`361.09ns ± 4.35ns`|`666.34ns`|`345.31ns - 675.17ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`148.03ns ± 2.59ns`|`305.18ns`|`133.61ns - 314.13ns`|
|Set|`524288`|`269.19ns ± 570.99ps`|`292.4ns`|`265.08ns - 332.84ns`|
|Set direct assign|`524288`|`433.07ns ± 4.86ns`|`830.72ns`|`415.97ns - 831.48ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`154.65ns ± 4.89ns`|`301.59ns`|`129.24ns - 375.94ns`|
|Set|`524288`|`217.26ns ± 4.78ns`|`379.06ns`|`190.49ns - 380.93ns`|
|Set direct assign|`524288`|`341.64ns ± 1.96ns`|`492.72ns`|`331.81ns - 496.99ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`259.69ns ± 1.89ns`|`393.96ns`|`249.22ns - 445.76ns`|
|Set|`524288`|`395.17ns ± 6.34ns`|`747.97ns`|`368.01ns - 757.23ns`|
|Set direct assign|`524288`|`530.64ns ± 886.6ps`|`559.67ns`|`522.16ns - 628.31ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`246.26ns ± 427.07ps`|`273.51ns`|`242ns - 276.49ns`|
|Set|`524288`|`291.55ns ± 460.59ps`|`312.55ns`|`274.73ns - 312.9ns`|
|Set direct assign|`524288`|`413.73ns ± 910.5ps`|`456.29ns`|`406.15ns - 503.49ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`449.69ns ± 10.55ns`|`1.01μs`|`415.48ns - 1.27μs`|
|Set|`524288`|`553.89ns ± 8.13ns`|`1.06μs`|`526.17ns - 1.07μs`|
|Set direct assign|`524288`|`691.09ns ± 5.49ns`|`848.42ns`|`672.42ns - 1.36μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`345.92ns ± 4.88ns`|`621.18ns`|`314.04ns - 630.37ns`|
|Array.includes()|`524288`|`443.53ns ± 11.26ns`|`937.12ns`|`399.23ns - 1.08μs`|
|Set direct assign|`524288`|`468.51ns ± 6.76ns`|`868.03ns`|`443.83ns - 876.89ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`839.62ns ± 1.19ns`|`857.63ns`|`829.55ns - 857.63ns`|
|Array.includes()|`131072`|`852.26ns ± 1.54ns`|`871.51ns`|`834.84ns - 871.51ns`|
|Set direct assign|`131072`|`1.46μs ± 36.48ns`|`2.6μs`|`1.4μs - 2.6μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`753.48ns ± 1.56ns`|`797.63ns`|`747.41ns - 797.63ns`|
|Array.includes()|`131072`|`826.95ns ± 1.26ns`|`848.51ns`|`814.81ns - 848.51ns`|
|Set direct assign|`131072`|`1.3μs ± 2.17ns`|`1.33μs`|`1.28μs - 1.33μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.04μs ± 13.52ns`|`1.46μs`|`1.01μs - 1.46μs`|
|Array.includes()|`131072`|`1.53μs ± 47.49ns`|`3.02μs`|`1.46μs - 3.02μs`|
|Set direct assign|`131072`|`1.59μs ± 3.43ns`|`1.68μs`|`1.57μs - 1.68μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`820.01ns ± 2.77ns`|`900.81ns`|`810.47ns - 900.81ns`|
|Set direct assign|`131072`|`1.35μs ± 1.29ns`|`1.36μs`|`1.33μs - 1.36μs`|
|Array.includes()|`131072`|`1.44μs ± 3.61ns`|`1.52μs`|`1.42μs - 1.52μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.74μs ± 4.26ns`|`1.82μs`|`1.71μs - 1.82μs`|
|Set direct assign|`131072`|`2.31μs ± 13.03ns`|`2.61μs`|`2.24μs - 2.61μs`|
|Array.includes()|`131072`|`3.18μs ± 5.51ns`|`3.26μs`|`3.12μs - 3.26μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.25μs ± 3.7ns`|`1.33μs`|`1.21μs - 1.33μs`|
|Set direct assign|`131072`|`1.85μs ± 29.52ns`|`2.77μs`|`1.79μs - 2.77μs`|
|Array.includes()|`131072`|`3.15μs ± 51.18ns`|`4.76μs`|`3.07μs - 4.76μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.24μs ± 7.78ns`|`2.39μs`|`2.18μs - 2.39μs`|
|Set direct assign|`131072`|`2.86μs ± 4.3ns`|`2.94μs`|`2.83μs - 2.94μs`|
|Array.includes()|`131072`|`6.42μs ± 72.7ns`|`8.69μs`|`6.29μs - 8.69μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.47μs ± 8.95ns`|`1.73μs`|`1.44μs - 1.73μs`|
|Set direct assign|`131072`|`1.98μs ± 5.91ns`|`2.12μs`|`1.95μs - 2.12μs`|
|Array.includes()|`131072`|`6.3μs ± 180.57ns`|`11.99μs`|`6.09μs - 11.99μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`93.02ns ± 681.5ps`|`126.04ns`|`86.72ns - 128.34ns`|
|await non-promise|`524288`|`166.06ns ± 1.69ns`|`221.22ns`|`157.36ns - 356.39ns`|
|await promise|`524288`|`177.25ns ± 3.32ns`|`310.39ns`|`159.67ns - 365.96ns`|
|async generator|`524288`|`297.9ns ± 19.46ns`|`1.36μs`|`255.47ns - 2.46μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.26μs ± 19.29ns`|`1.82μs`|`1.22μs - 1.82μs`|
|generator|`131072`|`2.58μs ± 53.8ns`|`3.92μs`|`2.48μs - 3.92μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`92.44ns ± 2.89ns`|`230.21ns`|`77.85ns - 294.53ns`|`92.44ns ± 10.96ns`|`341.55ns`|`182.17ns - 342.09ns`|
|linked list map|`524288`|`150.93ns ± 3.21ns`|`361.6ns`|`129.97ns - 380.97ns`|`150.93ns ± 8.35ns`|`319.42ns`|`178.07ns - 925.5ns`|
|map|`524288`|`168.24ns ± 3.52ns`|`359.9ns`|`137.81ns - 369.54ns`|`168.24ns ± 6.37ns`|`470.72ns`|`188.75ns - 513.78ns`|
|two object buckets|`524288`|`319.5ns ± 3.88ns`|`538.63ns`|`298.44ns - 539.1ns`|`319.5ns ± 8.36ns`|`400.17ns`|`195.36ns - 560.88ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`12.05ns ± 206.28ps`|`20.09ns`|`9.16ns - 24ns`|`12.05ns ± 16.25ns`|`248.98ns`|`168.55ns - 274.81ns`|
|linked list map|`524288`|`12.64ns ± 309.31ps`|`23.17ns`|`5.49ns - 28.17ns`|`12.64ns ± 599.39ns`|`17.05μs`|`170.38ns - 17.22μs`|
|two map buckets|`524288`|`20.76ns ± 279.26ps`|`31.14ns`|`15.75ns - 38.32ns`|`20.76ns ± 20.13ns`|`822.54ns`|`176.36ns - 1.11μs`|
|two object buckets|`524288`|`104.23ns ± 1.26ns`|`175.29ns`|`94.42ns - 181.49ns`|`104.23ns ± 11.02ns`|`434.29ns`|`180.38ns - 473.92ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.69ns ± 560.15ps`|`82.82ns`|`40.84ns - 87.23ns`|`43.69ns ± 14.39ns`|`299.26ns`|`175.44ns - 309.34ns`|
|linked list map|`524288`|`95.97ns ± 1.73ns`|`164.94ns`|`84.43ns - 170.57ns`|`95.97ns ± 10.92ns`|`358.7ns`|`176.86ns - 477.57ns`|
|map|`524288`|`109.66ns ± 3.82ns`|`193.03ns`|`96.34ns - 560.74ns`|`109.66ns ± 9.15ns`|`313.51ns`|`178.9ns - 345.35ns`|
|two object buckets|`524288`|`241.5ns ± 2.52ns`|`424.75ns`|`229.79ns - 430.38ns`|`241.5ns ± 5.51ns`|`415.35ns`|`204.54ns - 849.76ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`85.4ns ± 1.74ns`|`148.87ns`|`72.97ns - 154.52ns`|`85.4ns ± 13.17ns`|`438.71ns`|`191.55ns - 448.27ns`|
|linked list map|`524288`|`138.01ns ± 5.76ns`|`453.17ns`|`114.42ns - 534.13ns`|`138.01ns ± 9.14ns`|`403.06ns`|`189.37ns - 652.24ns`|
|map|`524288`|`216.46ns ± 5.18ns`|`550.85ns`|`192.25ns - 557.91ns`|`216.46ns ± 7.06ns`|`674.04ns`|`188.79ns - 840.71ns`|
|two object buckets|`524288`|`323.65ns ± 4.3ns`|`557.43ns`|`300.89ns - 563.37ns`|`323.65ns ± 8.58ns`|`480.05ns`|`202.41ns - 940.45ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`13.63ns ± 246.26ps`|`22.64ns`|`7.82ns - 22.65ns`|`13.63ns ± 20.47ns`|`431.68ns`|`179.32ns - 1.24μs`|
|linked list map|`524288`|`16.18ns ± 382.86ps`|`30.43ns`|`10.86ns - 40.05ns`|`16.18ns ± 20.17ns`|`552.26ns`|`187.92ns - 865.53ns`|
|two map buckets|`524288`|`30.9ns ± 608.92ps`|`50.62ns`|`23.08ns - 90.23ns`|`30.9ns ± 20.66ns`|`657.54ns`|`186.82ns - 1.4μs`|
|two object buckets|`524288`|`110.86ns ± 959.05ps`|`169.06ns`|`102.08ns - 198.1ns`|`110.86ns ± 10.06ns`|`311.33ns`|`186.84ns - 487.14ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.99ns ± 1.42ns`|`130.07ns`|`35.74ns - 156.07ns`|`43.99ns ± 16.33ns`|`495.97ns`|`182.75ns - 537.89ns`|
|linked list map|`524288`|`91.77ns ± 2.21ns`|`159.5ns`|`77.25ns - 293.89ns`|`91.77ns ± 15.22ns`|`542.05ns`|`183.92ns - 1.16μs`|
|map|`524288`|`162.47ns ± 5.54ns`|`554.57ns`|`143.47ns - 603.69ns`|`162.47ns ± 7.67ns`|`528.82ns`|`184.13ns - 538.52ns`|
|two object buckets|`524288`|`245.56ns ± 2.45ns`|`421.43ns`|`233.15ns - 427.16ns`|`245.56ns ± 13.49ns`|`1.18μs`|`210.13ns - 1.64μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`82.57ns ± 1.56ns`|`169.55ns`|`72.46ns - 204.86ns`|`82.57ns ± 20.27ns`|`594.09ns`|`231.06ns - 1.12μs`|
|linked list map|`524288`|`143.59ns ± 2.97ns`|`278.27ns`|`116.9ns - 284.58ns`|`143.59ns ± 12.31ns`|`725.73ns`|`202.92ns - 758.41ns`|
|two object buckets|`524288`|`255.82ns ± 3.16ns`|`416.37ns`|`238.6ns - 420.41ns`|`255.82ns ± 9.9ns`|`834.33ns`|`238.89ns - 1.13μs`|
|map|`524288`|`672.17ns ± 9.52ns`|`1.26μs`|`568.29ns - 1.38μs`|`672.17ns ± 35.22ns`|`472.98ns`|`203.12ns - 1.18μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`21.87ns ± 435.94ps`|`37.69ns`|`14.27ns - 40.34ns`|`21.87ns ± 26.29ns`|`793.02ns`|`230.87ns - 820.05ns`|
|map|`524288`|`25.43ns ± 355.32ps`|`38.06ns`|`17.77ns - 44.18ns`|`25.43ns ± 29.5ns`|`868.24ns`|`257.48ns - 1.55μs`|
|two map buckets|`524288`|`29.74ns ± 567.47ps`|`52.56ns`|`22.85ns - 59.52ns`|`29.74ns ± 27.54ns`|`594.74ns`|`238.27ns - 1.22μs`|
|two object buckets|`524288`|`114.74ns ± 1.84ns`|`193.23ns`|`85.5ns - 196.14ns`|`114.74ns ± 17.35ns`|`629.49ns`|`207.78ns - 1.02μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.39ns ± 439.69ps`|`71.54ns`|`36.5ns - 71.81ns`|`43.39ns ± 28.42ns`|`759.44ns`|`272.99ns - 1.01μs`|
|linked list map|`524288`|`96.36ns ± 2.13ns`|`177.38ns`|`77.14ns - 238.04ns`|`96.36ns ± 31.85ns`|`1.68μs`|`262.5ns - 1.8μs`|
|two object buckets|`524288`|`153.99ns ± 2.45ns`|`268.67ns`|`138.74ns - 286.48ns`|`153.99ns ± 22.76ns`|`1.09μs`|`263.86ns - 1.11μs`|
|map|`524288`|`616.83ns ± 11.08ns`|`1.31μs`|`496.27ns - 1.41μs`|`616.83ns ± 22.18ns`|`657.27ns`|`286.33ns - 675.57ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`89.14ns ± 1.44ns`|`148ns`|`76.58ns - 156.47ns`|`89.14ns ± 35.58ns`|`999.46ns`|`351.27ns - 1.05μs`|
|linked list map|`524288`|`206.65ns ± 7.7ns`|`440.17ns`|`127.19ns - 475.56ns`|`206.65ns ± 34.76ns`|`1.22μs`|`387.11ns - 1.7μs`|
|two object buckets|`524288`|`226.83ns ± 4.73ns`|`456.19ns`|`185.44ns - 534.33ns`|`226.83ns ± 21.63ns`|`897.63ns`|`319.71ns - 1.03μs`|
|map|`524288`|`4.02μs ± 142.04ns`|`6.95μs`|`1.1μs - 7.71μs`|`4.02μs ± 295.87ns`|`949.16ns`|`503.61ns - 1.3μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`29.01ns ± 615.27ps`|`56.39ns`|`18.22ns - 56.76ns`|`29.01ns ± 63ns`|`1.37μs`|`568.1ns - 1.54μs`|
|linked list map|`524288`|`45.21ns ± 597.29ps`|`74.97ns`|`34.74ns - 75.66ns`|`45.21ns ± 66.25ns`|`1.53μs`|`559.01ns - 1.9μs`|
|two object buckets|`524288`|`73.22ns ± 995.92ps`|`134.18ns`|`62.98ns - 136.04ns`|`73.22ns ± 49.81ns`|`1.44μs`|`441.53ns - 1.64μs`|
|map|`524288`|`84.41ns ± 2.37ns`|`195.01ns`|`68.41ns - 251.71ns`|`84.41ns ± 58.28ns`|`1.1μs`|`557.39ns - 1.29μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`38.67ns ± 564.39ps`|`62.59ns`|`29.64ns - 77.87ns`|`38.67ns ± 79.7ns`|`1.33μs`|`699.35ns - 1.73μs`|
|linked list map|`524288`|`47.81ns ± 463.07ps`|`61.76ns`|`42.63ns - 84.83ns`|`47.81ns ± 72.98ns`|`1.11μs`|`602.84ns - 1.11μs`|
|map|`524288`|`78.26ns ± 1.59ns`|`151.73ns`|`62.15ns - 155.61ns`|`78.26ns ± 77.06ns`|`1.25μs`|`643.6ns - 1.65μs`|
|two object buckets|`524288`|`212.62ns ± 2.52ns`|`385.23ns`|`178.44ns - 415.3ns`|`212.62ns ± 70.15ns`|`1.36μs`|`681.6ns - 1.69μs`|
# Web APIs
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`624.02ns ± 3.06ns`|`782.22ns`|`532ns - 928.17ns`|
|header pairs|`1048576`|`724.15ns ± 2.96ns`|`880.56ns`|`617.63ns - 894.57ns`|
|new Headers().set()|`1048576`|`787.57ns ± 12.87ns`|`1.46μs`|`566.2ns - 1.72μs`|
|new Headers().append()|`1048576`|`794.67ns ± 12.45ns`|`1.51μs`|`555.92ns - 1.79μs`|
|new Headers(record)|`1048576`|`923.69ns ± 11.04ns`|`1.62μs`|`706.7ns - 1.89μs`|
|new Headers(pairs)|`1048576`|`1.02μs ± 9.18ns`|`1.7μs`|`823.64ns - 1.96μs`|

