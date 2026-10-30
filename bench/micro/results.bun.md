# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`487.33ps ± 2.44ps`|`800.78ps`|`322.27ps - 9.92ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`76.02ns ± 992.63ps`|`123.54ns`|`65.17ns - 123.56ns`|
|fp & procedural filter|`524288`|`133.54ns ± 2.18ns`|`184.01ns`|`98.78ns - 187.18ns`|
|fp|`524288`|`225.16ns ± 970.42ps`|`277.79ns`|`210.36ns - 295.25ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`150.83ns ± 530.58ps`|`169.22ns`|`139.1ns - 174.26ns`|
|fp & procedural filter|`524288`|`351.48ns ± 5.69ns`|`540.34ns`|`300.84ns - 545.61ns`|
|fp|`524288`|`529.68ns ± 2.56ns`|`661.07ns`|`500.55ns - 669.74ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`1.69ns ± 27.4ps`|`2.88ns`|`1.38ns - 3.03ns`|
|polymorphic array|`524288`|`1.82ns ± 18.66ps`|`2.55ns`|`1.45ns - 2.71ns`|
|monomorphic object|`524288`|`1.98ns ± 38.16ps`|`2.58ns`|`1.72ns - 6.66ns`|
|polymorphic object|`524288`|`2.83ns ± 33.14ps`|`3.27ns`|`2.55ns - 6.81ns`|
|megamorphic object|`524288`|`8.4ns ± 104.03ps`|`12.82ns`|`7.42ns - 13.41ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.82ns ± 97.24ps`|`9.7ns`|`4.28ns - 9.73ns`|
|monomorphic object|`524288`|`8.23ns ± 114.36ps`|`14.32ns`|`6.9ns - 14.5ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (create with prototype)|`524288`|`3.13ns ± 41.74ps`|`4.38ns`|`2.87ns - 7.78ns`|
|prototype chain (override prototype)|`524288`|`3.18ns ± 41.43ps`|`4.94ns`|`2.94ns - 7.62ns`|
|direct assign|`524288`|`3.49ns ± 25.77ps`|`5ns`|`3.39ns - 5.11ns`|
|WeakMap store|`524288`|`11.52ns ± 221.93ps`|`16.36ns`|`4.81ns - 16.82ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`73.01ns ± 374.84ps`|`85.09ns`|`63.66ns - 85.31ns`|
|Object.create(null)|`524288`|`390.51ns ± 968.26ps`|`422.5ns`|`371.45ns - 432.45ns`|
|object literal|`524288`|`391.11ns ± 1.04ns`|`419.68ns`|`370.49ns - 466.83ns`|
|object literal (computed properties)|`524288`|`406.87ns ± 1.48ns`|`469.88ns`|`381.63ns - 535.34ns`|
|function constructor|`524288`|`414.94ns ± 1.9ns`|`445.13ns`|`393.82ns - 620.67ns`|
|function constructor (freezed proto)|`524288`|`417.3ns ± 1.27ns`|`462.32ns`|`394.31ns - 485.32ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Object.create()|`524288`|`1.37ns ± 31.15ps`|`2.15ns`|`1.28ns - 5.04ns`|
|function constructor|`524288`|`1.41ns ± 20.62ps`|`2.27ns`|`1.27ns - 2.32ns`|
|constructor|`524288`|`1.49ns ± 35.57ps`|`2.17ns`|`1.27ns - 4.96ns`|
|set prototype|`524288`|`1.52ns ± 25.79ps`|`2.17ns`|`1.27ns - 2.34ns`|
|set __proto__|`524288`|`29.29ns ± 205.92ps`|`38.32ns`|`26.61ns - 38.43ns`|
|Object.setPrototypeOf()|`524288`|`38.36ns ± 369.11ps`|`46.19ns`|`34.99ns - 77.68ns`|
|object spread|`524288`|`79.64ns ± 1.73ns`|`111.72ns`|`59.23ns - 114.12ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`54.59ns ± 915.7ps`|`85.13ns`|`41.04ns - 87.91ns`|
|Set|`1048576`|`177.7ns ± 3.36ns`|`252.51ns`|`116.28ns - 255.08ns`|
|Set direct assign|`1048576`|`209.17ns ± 4.24ns`|`335.31ns`|`150.49ns - 361.17ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`26.26ns ± 272.14ps`|`42.69ns`|`22.22ns - 44.49ns`|
|Set|`1048576`|`87.87ns ± 1.61ns`|`127.53ns`|`59.86ns - 144.13ns`|
|Set direct assign|`1048576`|`119.03ns ± 2.14ns`|`189.26ns`|`93.23ns - 201.57ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`38.66ns ± 445.27ps`|`65.61ns`|`32.88ns - 78.06ns`|
|Set|`1048576`|`139.73ns ± 1.15ns`|`247.84ns`|`125.15ns - 256.48ns`|
|Set direct assign|`1048576`|`178.1ns ± 1.73ns`|`331.43ns`|`161.33ns - 345.37ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`38.65ns ± 542.44ps`|`67.1ns`|`32.84ns - 99.16ns`|
|Set|`1048576`|`71.52ns ± 516.12ps`|`114.67ns`|`62.48ns - 126.61ns`|
|Set direct assign|`1048576`|`105.53ns ± 924.14ps`|`181.74ns`|`95.12ns - 186.45ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`77.9ns ± 539.19ps`|`128.85ns`|`67.53ns - 134.27ns`|
|Set|`1048576`|`164.25ns ± 1.34ns`|`289.2ns`|`145.88ns - 308.93ns`|
|Set direct assign|`1048576`|`217.47ns ± 1.94ns`|`377.97ns`|`184.42ns - 395.63ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`80.35ns ± 597.96ps`|`107.41ns`|`66.22ns - 134.63ns`|
|Array.includes()|`1048576`|`82.13ns ± 923.02ps`|`131.28ns`|`69.52ns - 151.92ns`|
|Set direct assign|`1048576`|`111.62ns ± 447.06ps`|`129.42ns`|`103.69ns - 198.17ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`148.86ns ± 1.93ns`|`237.53ns`|`123.89ns - 299.33ns`|
|Set|`1048576`|`326.97ns ± 3.42ns`|`411.66ns`|`254.48ns - 450.53ns`|
|Set direct assign|`1048576`|`376.94ns ± 3.63ns`|`476.56ns`|`294.84ns - 591.86ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`140.71ns ± 1.27ns`|`226.89ns`|`122.57ns - 255.97ns`|
|Set|`1048576`|`172.18ns ± 1.39ns`|`214.51ns`|`142.46ns - 224.64ns`|
|Set direct assign|`1048576`|`211.33ns ± 1.97ns`|`309.33ns`|`176.3ns - 318.91ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`67.73ns ± 739.05ps`|`114.59ns`|`60.43ns - 115.54ns`|
|Set|`524288`|`194.17ns ± 3.35ns`|`348.37ns`|`169.05ns - 349.07ns`|
|Set direct assign|`524288`|`258.79ns ± 2.34ns`|`457.52ns`|`245.28ns - 467.36ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`67.79ns ± 934.54ps`|`111.87ns`|`60.33ns - 117.69ns`|
|Set|`524288`|`130.62ns ± 993.3ps`|`164.7ns`|`107.23ns - 165.57ns`|
|Set direct assign|`524288`|`193.27ns ± 2.89ns`|`322.33ns`|`174.3ns - 334.88ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`128.95ns ± 2.47ns`|`214.42ns`|`112.57ns - 218.74ns`|
|Set|`524288`|`228.68ns ± 5.43ns`|`406.4ns`|`190.47ns - 411.45ns`|
|Set direct assign|`524288`|`303.69ns ± 3.93ns`|`534.52ns`|`274.39ns - 539.25ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`124.57ns ± 1.42ns`|`210.22ns`|`112.58ns - 215.04ns`|
|Set|`524288`|`140.26ns ± 2.92ns`|`235.64ns`|`113.5ns - 241.49ns`|
|Set direct assign|`524288`|`202.68ns ± 2.83ns`|`341.65ns`|`181.67ns - 355.06ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`215.03ns ± 1.95ns`|`352.8ns`|`195.87ns - 364.43ns`|
|Set|`524288`|`345.7ns ± 5.17ns`|`562.65ns`|`290.08ns - 580.1ns`|
|Set direct assign|`524288`|`445.93ns ± 5.68ns`|`696.17ns`|`366.31ns - 709.23ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`216.47ns ± 2.71ns`|`339.66ns`|`182.89ns - 349.62ns`|
|Array.includes()|`524288`|`234.88ns ± 5.57ns`|`388.96ns`|`192.2ns - 393.5ns`|
|Set direct assign|`524288`|`303.02ns ± 3.23ns`|`436.5ns`|`253.31ns - 445.79ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`342.16ns ± 2.62ns`|`500.7ns`|`317.77ns - 562.03ns`|
|Set|`524288`|`541.75ns ± 7.48ns`|`835.35ns`|`420.85ns - 842.61ns`|
|Set direct assign|`524288`|`606.89ns ± 7.45ns`|`1μs`|`506.73ns - 1.02μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`304.74ns ± 3.66ns`|`393.93ns`|`219.91ns - 429.98ns`|
|Set direct assign|`524288`|`362.08ns ± 3.82ns`|`522.31ns`|`298.97ns - 533ns`|
|Array.includes()|`524288`|`370.77ns ± 4.45ns`|`581.96ns`|`324.94ns - 583.14ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`635.92ns ± 12.79ns`|`1.03μs`|`596.98ns - 1.03μs`|
|Array.includes()|`131072`|`690.08ns ± 2.36ns`|`717.5ns`|`668.63ns - 717.5ns`|
|Set direct assign|`131072`|`877.92ns ± 9.96ns`|`969.34ns`|`809.93ns - 969.34ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`559.86ns ± 16.72ns`|`827.41ns`|`479.8ns - 827.41ns`|
|Set direct assign|`131072`|`734.02ns ± 4.21ns`|`813.15ns`|`690.66ns - 813.15ns`|
|Array.includes()|`131072`|`759.39ns ± 35.11ns`|`1.31μs`|`657.91ns - 1.31μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`856.06ns ± 31.15ns`|`1.4μs`|`748.31ns - 1.4μs`|
|Set direct assign|`131072`|`1.05μs ± 26.17ns`|`1.8μs`|`957.37ns - 1.8μs`|
|Array.includes()|`131072`|`1.15μs ± 28.49ns`|`1.93μs`|`1.06μs - 1.93μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`609.5ns ± 5.65ns`|`653.09ns`|`537.79ns - 653.09ns`|
|Set direct assign|`131072`|`842.59ns ± 5.8ns`|`908.18ns`|`779.06ns - 908.18ns`|
|Array.includes()|`131072`|`1.06μs ± 5.53ns`|`1.14μs`|`1.01μs - 1.14μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.58μs ± 43.61ns`|`2.74μs`|`1.35μs - 2.74μs`|
|Set direct assign|`131072`|`1.7μs ± 26.88ns`|`2.44μs`|`1.57μs - 2.44μs`|
|Array.includes()|`131072`|`2.15μs ± 52.93ns`|`3.77μs`|`2.03μs - 3.77μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.03μs ± 15.87ns`|`1.16μs`|`884.13ns - 1.16μs`|
|Set direct assign|`131072`|`1.29μs ± 25.35ns`|`1.87μs`|`1.13μs - 1.87μs`|
|Array.includes()|`131072`|`2.05μs ± 52.23ns`|`3.68μs`|`1.94μs - 3.68μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.87μs ± 21.57ns`|`2.13μs`|`1.71μs - 2.13μs`|
|Set direct assign|`131072`|`2.08μs ± 25.07ns`|`2.83μs`|`1.99μs - 2.83μs`|
|Array.includes()|`131072`|`4.44μs ± 22.78ns`|`4.69μs`|`4.18μs - 4.69μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.1μs ± 23ns`|`1.45μs`|`976.9ns - 1.45μs`|
|Set direct assign|`131072`|`1.38μs ± 27.17ns`|`1.96μs`|`1.21μs - 1.96μs`|
|Array.includes()|`131072`|`4.3μs ± 56.99ns`|`5.83μs`|`4.05μs - 5.83μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`54.98ns ± 795.74ps`|`91.35ns`|`46.37ns - 95.47ns`|
|await non-promise|`524288`|`99.08ns ± 728.96ps`|`135.62ns`|`89.86ns - 163.11ns`|
|await promise|`524288`|`101.38ns ± 1.15ns`|`168.3ns`|`90.17ns - 187.75ns`|
|async generator|`524288`|`525.19ns ± 3.06ns`|`732.35ns`|`489.84ns - 767.42ns`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`781.94ns ± 11.03ns`|`1.08μs`|`731.69ns - 1.08μs`|
|generator|`131072`|`1.27μs ± 35.6ns`|`2.37μs`|`1.2μs - 2.37μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`80.08ns ± 891.04ps`|`117.49ns`|`70.24ns - 117.86ns`|`80.08ns ± 17.84ns`|`608.49ns`|`218.44ns - 695.84ns`|
|map|`524288`|`103.5ns ± 689.34ps`|`150.36ns`|`91.37ns - 156.77ns`|`103.5ns ± 17.04ns`|`515.27ns`|`217.62ns - 1.2μs`|
|linked list map|`524288`|`111.81ns ± 1.4ns`|`166.3ns`|`97.34ns - 172.91ns`|`111.81ns ± 16.78ns`|`728.52ns`|`209.59ns - 1.18μs`|
|two object buckets|`524288`|`300.8ns ± 2.59ns`|`462.29ns`|`277.99ns - 465.07ns`|`300.8ns ± 3.93ns`|`523.43ns`|`256.81ns - 553.53ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`17.78ns ± 387ps`|`29.8ns`|`10.34ns - 29.92ns`|`17.78ns ± 20.36ns`|`357.38ns`|`196.63ns - 387.15ns`|
|linked list map|`524288`|`22.33ns ± 343.65ps`|`36.39ns`|`16.13ns - 38.87ns`|`22.33ns ± 722.69ns`|`19.74μs`|`216.14ns - 19.9μs`|
|two map buckets|`524288`|`25.1ns ± 418.91ps`|`41.2ns`|`16.59ns - 44.48ns`|`25.1ns ± 22.26ns`|`775.79ns`|`194.18ns - 786.05ns`|
|two object buckets|`524288`|`92.6ns ± 550.64ps`|`115.92ns`|`81.77ns - 118.26ns`|`92.6ns ± 17.22ns`|`595.65ns`|`218.09ns - 705.46ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`57.2ns ± 722.75ps`|`88.26ns`|`45.68ns - 92.08ns`|`57.2ns ± 20.12ns`|`586.87ns`|`212.99ns - 627.91ns`|
|map|`524288`|`74.69ns ± 652.36ps`|`107.63ns`|`64.32ns - 110.6ns`|`74.69ns ± 18.09ns`|`443.48ns`|`222.01ns - 679.02ns`|
|linked list map|`524288`|`86.64ns ± 1.17ns`|`130.52ns`|`75.12ns - 154.18ns`|`86.64ns ± 20.3ns`|`846.28ns`|`211.37ns - 857.26ns`|
|two object buckets|`524288`|`217.59ns ± 2.26ns`|`341.59ns`|`191.73ns - 345.11ns`|`217.59ns ± 9.63ns`|`571.04ns`|`244.91ns - 871.37ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`81.63ns ± 1ns`|`119.32ns`|`69.4ns - 128.01ns`|`81.63ns ± 18.37ns`|`494.99ns`|`239.52ns - 697.61ns`|
|linked list map|`524288`|`106.16ns ± 1.36ns`|`165.08ns`|`89.86ns - 167.86ns`|`106.16ns ± 17.09ns`|`545.94ns`|`225.92ns - 753.48ns`|
|map|`524288`|`151.12ns ± 1.44ns`|`248.74ns`|`131.39ns - 257.52ns`|`151.12ns ± 12.97ns`|`634.28ns`|`216.79ns - 947.28ns`|
|two object buckets|`524288`|`305.16ns ± 1.12ns`|`362.2ns`|`279.02ns - 388.24ns`|`305.16ns ± 4.21ns`|`421.1ns`|`274.3ns - 736.65ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`20.53ns ± 415.3ps`|`35.09ns`|`14.66ns - 43.32ns`|`20.53ns ± 24.34ns`|`683.43ns`|`216.34ns - 1.05μs`|
|map|`524288`|`20.81ns ± 357.94ps`|`30.88ns`|`14.87ns - 42.96ns`|`20.81ns ± 24.15ns`|`555.87ns`|`218.4ns - 1.2μs`|
|two map buckets|`524288`|`35.06ns ± 467.28ps`|`49.74ns`|`27.12ns - 51.28ns`|`35.06ns ± 21.57ns`|`526.67ns`|`214.16ns - 643.04ns`|
|two object buckets|`524288`|`100.03ns ± 523.18ps`|`118.68ns`|`84.65ns - 122.13ns`|`100.03ns ± 20.21ns`|`1.13μs`|`229.69ns - 1.18μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`47.09ns ± 428.29ps`|`65.46ns`|`38.13ns - 67.63ns`|`47.09ns ± 22.88ns`|`599.81ns`|`225.17ns - 1.23μs`|
|linked list map|`524288`|`70.72ns ± 927.07ps`|`105.47ns`|`61.37ns - 107.89ns`|`70.72ns ± 20.62ns`|`543.25ns`|`238.68ns - 662.13ns`|
|map|`524288`|`124.09ns ± 1.57ns`|`201.28ns`|`102.44ns - 203.12ns`|`124.09ns ± 13.56ns`|`486.63ns`|`207.27ns - 530.05ns`|
|two object buckets|`524288`|`234.74ns ± 1.87ns`|`344.61ns`|`220ns - 380.67ns`|`234.74ns ± 9.87ns`|`642.11ns`|`279.61ns - 818.79ns`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`84.52ns ± 866.53ps`|`122.13ns`|`67.57ns - 122.99ns`|`84.52ns ± 20.18ns`|`518.8ns`|`241.33ns - 548.43ns`|
|linked list map|`524288`|`126.17ns ± 1.24ns`|`203.15ns`|`110.88ns - 205.74ns`|`126.17ns ± 18.27ns`|`514.68ns`|`268.82ns - 542.91ns`|
|map|`524288`|`275.15ns ± 3.35ns`|`474.45ns`|`227.72ns - 482.81ns`|`275.15ns ± 5.28ns`|`514.74ns`|`257.96ns - 593.92ns`|
|two object buckets|`524288`|`288.52ns ± 1.75ns`|`391.65ns`|`266.16ns - 448.87ns`|`288.52ns ± 8.09ns`|`677.49ns`|`288.45ns - 909.42ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`29.07ns ± 476.82ps`|`45.56ns`|`21.17ns - 56.3ns`|`29.07ns ± 27.92ns`|`773.81ns`|`250.48ns - 1.17μs`|
|map|`524288`|`29.47ns ± 367.16ps`|`42.59ns`|`21.34ns - 52.89ns`|`29.47ns ± 26.93ns`|`489.39ns`|`248.29ns - 563.33ns`|
|two map buckets|`524288`|`30.36ns ± 369.93ps`|`45.04ns`|`23.64ns - 46.22ns`|`30.36ns ± 26.45ns`|`614.15ns`|`262.48ns - 663.42ns`|
|two object buckets|`524288`|`96.33ns ± 981.45ps`|`135.89ns`|`69.26ns - 169.1ns`|`96.33ns ± 24.07ns`|`855.68ns`|`277.27ns - 1.21μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`45.61ns ± 625.13ps`|`71.87ns`|`36.38ns - 74.3ns`|`45.61ns ± 27.63ns`|`595.98ns`|`269.35ns - 1.15μs`|
|linked list map|`524288`|`93.63ns ± 1.12ns`|`150.62ns`|`83.32ns - 151.59ns`|`93.63ns ± 30.23ns`|`1.32μs`|`301.99ns - 1.32μs`|
|two object buckets|`524288`|`148.28ns ± 1.23ns`|`223.85ns`|`131.67ns - 235.05ns`|`148.28ns ± 23.2ns`|`996.99ns`|`311.07ns - 1.27μs`|
|map|`524288`|`238.26ns ± 3.04ns`|`415.97ns`|`184.47ns - 426.87ns`|`238.26ns ± 9.79ns`|`484.92ns`|`263.6ns - 748.45ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`82.69ns ± 959.53ps`|`123.29ns`|`64.62ns - 138.83ns`|`82.69ns ± 30.65ns`|`671.93ns`|`349.02ns - 711.95ns`|
|linked list map|`524288`|`200.11ns ± 3.24ns`|`336.17ns`|`140.71ns - 367.69ns`|`200.11ns ± 27.58ns`|`872.66ns`|`411.73ns - 1.4μs`|
|two object buckets|`524288`|`242.11ns ± 3.91ns`|`346.31ns`|`196.47ns - 347.71ns`|`242.11ns ± 34.48ns`|`1.03μs`|`508.33ns - 1.05μs`|
|map|`524288`|`2.76μs ± 180.77ns`|`7.02μs`|`1.04μs - 7.1μs`|`2.76μs ± 196.98ns`|`671.45ns`|`432.23ns - 672.94ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`27.56ns ± 430.1ps`|`47.02ns`|`17.51ns - 47.47ns`|`27.56ns ± 49.6ns`|`1.05μs`|`441.97ns - 1.13μs`|
|linked list map|`524288`|`55.8ns ± 907.17ps`|`87.47ns`|`40.48ns - 115.8ns`|`55.8ns ± 51.38ns`|`1.12μs`|`504.1ns - 1.32μs`|
|map|`524288`|`55.83ns ± 382.97ps`|`68.02ns`|`47.4ns - 71.71ns`|`55.83ns ± 53.17ns`|`792.7ns`|`568.24ns - 817.06ns`|
|two object buckets|`524288`|`70.77ns ± 618.9ps`|`97.89ns`|`59.96ns - 102.83ns`|`70.77ns ± 50.91ns`|`954.54ns`|`543.09ns - 1.2μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`42.44ns ± 606.62ps`|`69.36ns`|`29.14ns - 69.93ns`|`42.44ns ± 71.64ns`|`1.17μs`|`634.68ns - 1.34μs`|
|map|`524288`|`52.26ns ± 423.55ps`|`61.01ns`|`43.48ns - 84.08ns`|`52.26ns ± 64.8ns`|`1.16μs`|`570.75ns - 1.27μs`|
|linked list map|`524288`|`52.79ns ± 577.98ps`|`74.26ns`|`43.13ns - 76.96ns`|`52.79ns ± 64.66ns`|`1.01μs`|`643.32ns - 1.02μs`|
|two object buckets|`524288`|`192.06ns ± 1.72ns`|`307.2ns`|`164.08ns - 311.83ns`|`192.06ns ± 47.75ns`|`996.07ns`|`597.12ns - 1.04μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|new Headers().set()|`1048576`|`390.72ns ± 4.19ns`|`549.54ns`|`325.66ns - 863.35ns`|
|headers record|`1048576`|`394.64ns ± 4.7ns`|`618.26ns`|`327.73ns - 832.16ns`|
|new Headers().append()|`1048576`|`404.12ns ± 4.69ns`|`587.95ns`|`338.01ns - 945.95ns`|
|header pairs|`1048576`|`465.38ns ± 4.63ns`|`669.85ns`|`394.05ns - 968.14ns`|
|new Headers(record)|`1048576`|`499.26ns ± 4.56ns`|`658.16ns`|`416.87ns - 1.09μs`|
|new Headers(pairs)|`1048576`|`588.14ns ± 5.19ns`|`737.22ns`|`503.78ns - 1.4μs`|

