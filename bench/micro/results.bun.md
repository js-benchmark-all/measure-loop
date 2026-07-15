# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`387.3ps ± 4.05ps`|`2.18ns`|`297.36ps - 6.66ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`2.01ns ± 38.36ps`|`5.28ns`|`1.82ns - 5.4ns`|
|monomorphic object|`524288`|`2.17ns ± 59.95ps`|`6.54ns`|`1.78ns - 6.83ns`|
|polymorphic array|`524288`|`2.37ns ± 30.11ps`|`3.31ns`|`1.8ns - 3.35ns`|
|polymorphic object|`524288`|`2.78ns ± 66.88ps`|`6.24ns`|`2.45ns - 8.78ns`|
|megamorphic object|`524288`|`8.86ns ± 167.71ps`|`14.92ns`|`7.48ns - 16.54ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`3.09ns ± 26.32ps`|`4.96ns`|`2.96ns - 5.65ns`|
|monomorphic object|`524288`|`4.38ns ± 62.94ps`|`7.63ns`|`3.98ns - 7.77ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`14.45ns ± 294.03ps`|`22.52ns`|`6.36ns - 26.22ns`|
|direct assign|`524288`|`17.18ns ± 66.62ps`|`19.35ns`|`16.95ns - 23.72ns`|
|prototype chain (override prototype)|`524288`|`26.87ns ± 166.22ps`|`31.86ns`|`26.08ns - 46.19ns`|
|prototype chain (create with prototype)|`524288`|`27.52ns ± 144.71ps`|`34.68ns`|`26.28ns - 35.2ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`58.54ns ± 1.13ns`|`107.79ns`|`50.45ns - 139.79ns`|
|object literal (computed properties)|`524288`|`370.14ns ± 2.35ns`|`513.79ns`|`355.51ns - 534.42ns`|
|function constructor|`524288`|`375.31ns ± 2.76ns`|`566.14ns`|`361.72ns - 570.69ns`|
|Object.create(null)|`524288`|`400.64ns ± 8.69ns`|`662.72ns`|`343.26ns - 721.09ns`|
|function constructor (freezed proto)|`524288`|`427.03ns ± 9.69ns`|`862.39ns`|`364.95ns - 867.21ns`|
|object literal|`524288`|`464.68ns ± 11.52ns`|`777.75ns`|`351.63ns - 786.83ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`1.25ns ± 9.96ps`|`1.83ns`|`1.21ns - 2.36ns`|
|Object.create()|`524288`|`1.29ns ± 26.93ps`|`1.84ns`|`1.21ns - 4.56ns`|
|set prototype|`524288`|`1.32ns ± 11.67ps`|`2.15ns`|`1.26ns - 2.53ns`|
|function constructor|`524288`|`1.35ns ± 33.12ps`|`2.16ns`|`1.27ns - 5.48ns`|
|set __proto__|`524288`|`29.71ns ± 232.01ps`|`38.93ns`|`28.46ns - 49.96ns`|
|Object.setPrototypeOf()|`524288`|`40.94ns ± 259.7ps`|`49.32ns`|`39.17ns - 62.06ns`|
|object spread|`524288`|`208.64ns ± 560.42ps`|`219.94ns`|`199.78ns - 272.44ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`25.22ns ± 385.73ps`|`47.32ns`|`21.26ns - 49.27ns`|
|Set|`1048576`|`178.95ns ± 2.65ns`|`345.27ns`|`159.15ns - 351.83ns`|
|Set direct assign|`1048576`|`240.81ns ± 2.15ns`|`403.89ns`|`226.86ns - 499.8ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`24.84ns ± 372.2ps`|`48.84ns`|`21.21ns - 54.41ns`|
|Set|`1048576`|`102.27ns ± 621.27ps`|`123.01ns`|`96.04ns - 219.76ns`|
|Set direct assign|`1048576`|`177.36ns ± 1.6ns`|`320.85ns`|`164.69ns - 365.73ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`40.28ns ± 580.74ps`|`76.85ns`|`35.55ns - 80.18ns`|
|Set|`1048576`|`202.07ns ± 2.74ns`|`397.64ns`|`182.49ns - 401.22ns`|
|Set direct assign|`1048576`|`270.66ns ± 2.73ns`|`543.85ns`|`255.89ns - 553.17ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`40.95ns ± 714.1ps`|`75.73ns`|`34.93ns - 102.23ns`|
|Set|`1048576`|`120.12ns ± 1.05ns`|`165.83ns`|`112.22ns - 315.2ns`|
|Set direct assign|`1048576`|`193.02ns ± 661.77ps`|`234.57ns`|`183.82ns - 307.89ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`95.88ns ± 1.81ns`|`166.16ns`|`74.34ns - 173.11ns`|
|Set|`1048576`|`214.6ns ± 2.23ns`|`443.8ns`|`200.14ns - 506.65ns`|
|Set direct assign|`1048576`|`295.25ns ± 3.82ns`|`606.08ns`|`276.62ns - 737.72ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`93.74ns ± 1.7ns`|`162.67ns`|`73.98ns - 164.65ns`|
|Set|`1048576`|`125.96ns ± 1.13ns`|`248.16ns`|`116.56ns - 260.81ns`|
|Set direct assign|`1048576`|`200.02ns ± 1.59ns`|`351.25ns`|`187.83ns - 407.62ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`153.02ns ± 1.06ns`|`202.17ns`|`134.37ns - 289.8ns`|
|Set|`1048576`|`350.97ns ± 4.64ns`|`672.58ns`|`323.92ns - 694.42ns`|
|Set direct assign|`1048576`|`408.17ns ± 2.58ns`|`509.79ns`|`392.35ns - 829.89ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`161.85ns ± 2.6ns`|`283.76ns`|`130.53ns - 287.82ns`|
|Set|`1048576`|`224.56ns ± 2.6ns`|`408.15ns`|`204.76ns - 422.11ns`|
|Set direct assign|`1048576`|`285ns ± 878.89ps`|`348.36ns`|`277.02ns - 398.43ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`78.49ns ± 2.05ns`|`140.1ns`|`65.27ns - 140.65ns`|
|Set|`524288`|`280ns ± 4.95ns`|`565.73ns`|`261.18ns - 571.3ns`|
|Set direct assign|`524288`|`431.73ns ± 5.33ns`|`790.49ns`|`410.58ns - 864.08ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`73.47ns ± 1.71ns`|`140.06ns`|`62.99ns - 140.43ns`|
|Set|`524288`|`204.3ns ± 3.67ns`|`409.14ns`|`187.93ns - 411.41ns`|
|Set direct assign|`524288`|`346.03ns ± 1.17ns`|`399.74ns`|`336.3ns - 458.68ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`127.82ns ± 389.78ps`|`142.88ns`|`122.06ns - 145.39ns`|
|Set|`524288`|`300.24ns ± 6.36ns`|`609.37ns`|`276.8ns - 612ns`|
|Set direct assign|`524288`|`441.41ns ± 1.89ns`|`532.38ns`|`430.99ns - 637.18ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`124.59ns ± 477.67ps`|`138.59ns`|`118.7ns - 160.49ns`|
|Set|`524288`|`219.04ns ± 5.95ns`|`465.23ns`|`188.45ns - 550.45ns`|
|Set direct assign|`524288`|`361.11ns ± 5.05ns`|`707.15ns`|`342.55ns - 841.56ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`227.96ns ± 1.33ns`|`280.85ns`|`219.17ns - 376.82ns`|
|Set|`524288`|`447.8ns ± 10.42ns`|`856.83ns`|`398.87ns - 857.87ns`|
|Set direct assign|`524288`|`554.27ns ± 7.95ns`|`1.11μs`|`532.65ns - 1.11μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`215.98ns ± 282.44ps`|`228.21ns`|`208.45ns - 228.75ns`|
|Set|`524288`|`294.86ns ± 3.08ns`|`541.66ns`|`282.75ns - 564.28ns`|
|Set direct assign|`524288`|`441.16ns ± 8.08ns`|`923.36ns`|`412ns - 962.04ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`407.55ns ± 1.74ns`|`482.09ns`|`396.86ns - 579.27ns`|
|Set|`524288`|`590.47ns ± 10.34ns`|`1.16μs`|`555.68ns - 1.16μs`|
|Set direct assign|`524288`|`718.63ns ± 8.73ns`|`1.41μs`|`683.9ns - 1.42μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`330.84ns ± 870.38ps`|`375.47ns`|`324.33ns - 386.8ns`|
|Array.includes()|`524288`|`404.79ns ± 6.41ns`|`742.94ns`|`377.83ns - 744.33ns`|
|Set direct assign|`524288`|`460.34ns ± 1.69ns`|`571.18ns`|`450.21ns - 587.68ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`131072`|`766.44ns ± 2.93ns`|`812.92ns`|`750.39ns - 812.92ns`|
|Set|`131072`|`843.5ns ± 728.48ps`|`855.64ns`|`837.5ns - 855.64ns`|
|Set direct assign|`131072`|`1.46μs ± 877.26ps`|`1.47μs`|`1.45μs - 1.47μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`131072`|`715.53ns ± 8.9ns`|`993.26ns`|`699.68ns - 993.26ns`|
|Set|`131072`|`719.85ns ± 1.14ns`|`746.18ns`|`713.38ns - 746.18ns`|
|Set direct assign|`131072`|`1.36μs ± 7.25ns`|`1.54μs`|`1.33μs - 1.54μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.03μs ± 5.62ns`|`1.2μs`|`1.02μs - 1.2μs`|
|Array.includes()|`131072`|`1.44μs ± 3.55ns`|`1.49μs`|`1.41μs - 1.49μs`|
|Set direct assign|`131072`|`1.58μs ± 4.35ns`|`1.69μs`|`1.56μs - 1.69μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`811.79ns ± 19.97ns`|`1.44μs`|`784.3ns - 1.44μs`|
|Set direct assign|`131072`|`1.39μs ± 34.68ns`|`2.45μs`|`1.32μs - 2.45μs`|
|Array.includes()|`131072`|`1.39μs ± 35.9ns`|`2.4μs`|`1.31μs - 2.4μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.69μs ± 8.56ns`|`1.78μs`|`1.62μs - 1.78μs`|
|Set direct assign|`131072`|`2.3μs ± 21.51ns`|`2.78μs`|`2.16μs - 2.78μs`|
|Array.includes()|`131072`|`2.74μs ± 12.79ns`|`3.01μs`|`2.69μs - 3.01μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.22μs ± 5.94ns`|`1.32μs`|`1.18μs - 1.32μs`|
|Set direct assign|`131072`|`1.9μs ± 27.75ns`|`2.35μs`|`1.73μs - 2.35μs`|
|Array.includes()|`131072`|`2.54μs ± 25.88ns`|`3.12μs`|`2.47μs - 3.12μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.26μs ± 6.48ns`|`2.39μs`|`2.2μs - 2.39μs`|
|Set direct assign|`131072`|`2.86μs ± 10.94ns`|`2.98μs`|`2.75μs - 2.98μs`|
|Array.includes()|`131072`|`5.95μs ± 9.16ns`|`6.15μs`|`5.89μs - 6.15μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.33μs ± 3.5ns`|`1.4μs`|`1.31μs - 1.4μs`|
|Set direct assign|`131072`|`2.06μs ± 25.9ns`|`2.47μs`|`1.93μs - 2.47μs`|
|Array.includes()|`131072`|`5.62μs ± 54.28ns`|`7.07μs`|`5.46μs - 7.07μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`108.52ns ± 1.74ns`|`209.29ns`|`88.43ns - 209.91ns`|
|await non-promise|`524288`|`163.68ns ± 20.06ns`|`1.25μs`|`120ns - 2.4μs`|
|await promise|`524288`|`190.98ns ± 2.92ns`|`362.44ns`|`176.69ns - 365.26ns`|
|async generator|`524288`|`930.14ns ± 4.39ns`|`1.14μs`|`908.23ns - 1.36μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.35μs ± 3.55ns`|`1.42μs`|`1.33μs - 1.42μs`|
|generator|`131072`|`2.74μs ± 37.7ns`|`3.86μs`|`2.65μs - 3.86μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`93.52ns ± 2.21ns`|`185.44ns`|`78.2ns - 285.47ns`|`93.52ns ± 16.74ns`|`1.04μs`|`190.7ns - 1.05μs`|
|linked list map|`524288`|`152.49ns ± 2.55ns`|`300.27ns`|`135.67ns - 372.36ns`|`152.49ns ± 8.94ns`|`403.43ns`|`204.07ns - 528.35ns`|
|map|`524288`|`166.37ns ± 3.23ns`|`317.84ns`|`142.12ns - 318.99ns`|`166.37ns ± 10.02ns`|`610.67ns`|`197.16ns - 979.35ns`|
|two object buckets|`524288`|`338.32ns ± 3.24ns`|`585.13ns`|`322.84ns - 594.04ns`|`338.32ns ± 8.85ns`|`599.96ns`|`225.93ns - 974.32ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`15.51ns ± 351.04ps`|`29.23ns`|`8.36ns - 30.72ns`|`15.51ns ± 20.61ns`|`538.1ns`|`189.37ns - 1.02μs`|
|map|`524288`|`15.85ns ± 273.18ps`|`26.48ns`|`10.41ns - 36.45ns`|`15.85ns ± 19.37ns`|`322.33ns`|`181.82ns - 917.8ns`|
|two map buckets|`524288`|`23.66ns ± 382.42ps`|`34.26ns`|`18.46ns - 44.77ns`|`23.66ns ± 26.48ns`|`970.49ns`|`190.23ns - 1.82μs`|
|two object buckets|`524288`|`111.33ns ± 1.36ns`|`175.63ns`|`100.35ns - 176.88ns`|`111.33ns ± 14.77ns`|`474.98ns`|`199.66ns - 811.08ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`49.54ns ± 738.24ps`|`87.3ns`|`39.89ns - 87.65ns`|`49.54ns ± 20.28ns`|`796.19ns`|`190.99ns - 836.74ns`|
|linked list map|`524288`|`110.32ns ± 1.72ns`|`174.12ns`|`95.79ns - 175.07ns`|`110.32ns ± 16.6ns`|`976.49ns`|`198.77ns - 1.16μs`|
|map|`524288`|`117.24ns ± 2.42ns`|`183.91ns`|`100.68ns - 365.09ns`|`117.24ns ± 12.28ns`|`499.32ns`|`195.98ns - 518.79ns`|
|two object buckets|`524288`|`261.62ns ± 845.45ps`|`279.04ns`|`253.88ns - 358.59ns`|`261.62ns ± 11.32ns`|`1.01μs`|`225.2ns - 1.44μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`87.08ns ± 1.45ns`|`153.66ns`|`75.7ns - 163.06ns`|`87.08ns ± 18.67ns`|`851.8ns`|`209.35ns - 1.24μs`|
|linked list map|`524288`|`152.51ns ± 4.27ns`|`447.35ns`|`129.4ns - 475.78ns`|`152.51ns ± 13.83ns`|`394.92ns`|`213.96ns - 1.37μs`|
|map|`524288`|`243.27ns ± 5.7ns`|`512.74ns`|`204.32ns - 522.03ns`|`243.27ns ± 5.92ns`|`582.85ns`|`210.85ns - 742.29ns`|
|two object buckets|`524288`|`340.03ns ± 3.05ns`|`595.2ns`|`324.12ns - 601.28ns`|`340.03ns ± 7.66ns`|`590.38ns`|`235.79ns - 885.18ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`13.85ns ± 240.3ps`|`22.91ns`|`8.48ns - 22.99ns`|`13.85ns ± 22.73ns`|`495.99ns`|`204.22ns - 952.7ns`|
|linked list map|`524288`|`16.92ns ± 332.76ps`|`26.4ns`|`7.24ns - 29.96ns`|`16.92ns ± 26.78ns`|`1.11μs`|`205.73ns - 1.53μs`|
|two map buckets|`524288`|`31.33ns ± 384.57ps`|`45.01ns`|`24.81ns - 45.32ns`|`31.33ns ± 21.95ns`|`605.52ns`|`198.78ns - 697.19ns`|
|two object buckets|`524288`|`120.68ns ± 522.71ps`|`137.8ns`|`104.45ns - 138.77ns`|`120.68ns ± 17.55ns`|`742.77ns`|`199.84ns - 1.33μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`47.38ns ± 1.06ns`|`109.29ns`|`41.51ns - 122.73ns`|`47.38ns ± 19.7ns`|`500.44ns`|`199.12ns - 618.97ns`|
|linked list map|`524288`|`103.35ns ± 3.97ns`|`194.33ns`|`86.81ns - 577.99ns`|`103.35ns ± 18.96ns`|`1.04μs`|`204.12ns - 1.26μs`|
|map|`524288`|`191.5ns ± 4.43ns`|`475.86ns`|`160.52ns - 504.51ns`|`191.5ns ± 6.66ns`|`385.73ns`|`197.87ns - 502.9ns`|
|two object buckets|`524288`|`270.47ns ± 2.96ns`|`485.8ns`|`259.51ns - 497.68ns`|`270.47ns ± 6.14ns`|`715.68ns`|`236.87ns - 731.41ns`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`89.96ns ± 1.55ns`|`164.03ns`|`77.41ns - 165.46ns`|`89.96ns ± 18.85ns`|`513.54ns`|`236.79ns - 542.82ns`|
|linked list map|`524288`|`152.32ns ± 1.71ns`|`244.55ns`|`132.39ns - 252.85ns`|`152.32ns ± 15.62ns`|`888.14ns`|`238.47ns - 990ns`|
|two object buckets|`524288`|`270.88ns ± 2.83ns`|`485.25ns`|`258.52ns - 517.98ns`|`270.88ns ± 15.32ns`|`434.74ns`|`278.79ns - 2.02μs`|
|map|`524288`|`827.53ns ± 8.73ns`|`1.14μs`|`575.68ns - 1.61μs`|`827.53ns ± 45.83ns`|`454.76ns`|`244.82ns - 893.99ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`21.24ns ± 418.18ps`|`35.8ns`|`12.64ns - 40.5ns`|`21.24ns ± 33.42ns`|`1.07μs`|`256.82ns - 1.48μs`|
|map|`524288`|`26.49ns ± 448.23ps`|`50.39ns`|`18.83ns - 51.3ns`|`26.49ns ± 29.23ns`|`535.75ns`|`262.11ns - 1.5μs`|
|two map buckets|`524288`|`30.91ns ± 700.57ps`|`47.28ns`|`23.74ns - 103.88ns`|`30.91ns ± 27.72ns`|`767.45ns`|`243.92ns - 983.74ns`|
|two object buckets|`524288`|`118.4ns ± 1.12ns`|`180.04ns`|`95.67ns - 180.32ns`|`118.4ns ± 23.37ns`|`1.17μs`|`267.24ns - 1.18μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`50.37ns ± 1.25ns`|`130.22ns`|`39.64ns - 155.05ns`|`50.37ns ± 31.06ns`|`896.91ns`|`314.7ns - 1.22μs`|
|linked list map|`524288`|`106.35ns ± 1.45ns`|`175.65ns`|`87.72ns - 178.62ns`|`106.35ns ± 38.37ns`|`1.82μs`|`298.94ns - 2.89μs`|
|two object buckets|`524288`|`165.85ns ± 2.16ns`|`300.96ns`|`155.13ns - 301.34ns`|`165.85ns ± 21.38ns`|`712.22ns`|`320.07ns - 739.83ns`|
|map|`524288`|`778.95ns ± 11.46ns`|`1.48μs`|`557.32ns - 1.54μs`|`778.95ns ± 34.93ns`|`526.62ns`|`295.63ns - 541.01ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`91.14ns ± 1.8ns`|`155ns`|`73.44ns - 155.18ns`|`91.14ns ± 40.72ns`|`907.96ns`|`384.37ns - 2.1μs`|
|linked list map|`524288`|`203.04ns ± 6.39ns`|`499.32ns`|`135.81ns - 519.22ns`|`203.04ns ± 39.21ns`|`1.25μs`|`477.78ns - 1.38μs`|
|two object buckets|`524288`|`248.52ns ± 4.97ns`|`416.56ns`|`205.01ns - 596.54ns`|`248.52ns ± 22.93ns`|`910.11ns`|`363.81ns - 1.16μs`|
|map|`524288`|`5.14μs ± 180.65ns`|`9.15μs`|`1.41μs - 11.06μs`|`5.14μs ± 393.68ns`|`958.02ns`|`523.62ns - 1.02μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`23.92ns ± 457.04ps`|`49.32ns`|`15.24ns - 52.65ns`|`23.92ns ± 73.04ns`|`1.34μs`|`658.28ns - 1.71μs`|
|linked list map|`524288`|`43.71ns ± 1.17ns`|`81.9ns`|`33.56ns - 162.07ns`|`43.71ns ± 69.81ns`|`1.41μs`|`580.23ns - 2.26μs`|
|map|`524288`|`75.69ns ± 1.66ns`|`158.28ns`|`59.6ns - 159.05ns`|`75.69ns ± 57.1ns`|`1.09μs`|`503.69ns - 1.21μs`|
|two object buckets|`524288`|`77.62ns ± 961.68ps`|`128.59ns`|`65.23ns - 129.98ns`|`77.62ns ± 72ns`|`1.51μs`|`707.36ns - 2.05μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`39.24ns ± 607.26ps`|`68.45ns`|`27.28ns - 68.57ns`|`39.24ns ± 92.7ns`|`1.42μs`|`761.16ns - 2.43μs`|
|linked list map|`524288`|`44.46ns ± 514.43ps`|`67.01ns`|`36.43ns - 80.81ns`|`44.46ns ± 98.62ns`|`1.42μs`|`854.85ns - 1.43μs`|
|map|`524288`|`72.23ns ± 2.36ns`|`177.14ns`|`52ns - 183.55ns`|`72.23ns ± 96.16ns`|`1.49μs`|`823.54ns - 2.43μs`|
|two object buckets|`524288`|`215.16ns ± 1.58ns`|`314.11ns`|`192.63ns - 346.12ns`|`215.16ns ± 75.6ns`|`1.27μs`|`709.53ns - 2.45μs`|

