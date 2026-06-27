# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`416.12ps ± 14.53ps`|`334.96ps`|`327.64ps - 31.7ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`3.65ns ± 477.74ps`|`34.95ns`|`1.93ns - 39.35ns`|
|polymorphic array|`524288`|`6.76ns ± 759.36ps`|`34.39ns`|`2.04ns - 34.72ns`|
|polymorphic object|`524288`|`9.08ns ± 803.28ps`|`31.24ns`|`3.19ns - 36.28ns`|
|monomorphic object|`524288`|`14.64ns ± 1.18ns`|`38.83ns`|`2.1ns - 40.75ns`|
|megamorphic object|`524288`|`25.21ns ± 710.05ps`|`53.41ns`|`10.91ns - 55.03ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.45ns ± 533.59ps`|`25.92ns`|`2.37ns - 31.91ns`|
|monomorphic object|`524288`|`9.66ns ± 530.07ps`|`27.69ns`|`3.67ns - 31.56ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.54ns ± 188.31ps`|`16.38ns`|`7.77ns - 29.37ns`|
|prototype chain (override prototype)|`524288`|`13.56ns ± 188.8ps`|`21.14ns`|`9.73ns - 30.26ns`|
|prototype chain (create with prototype)|`524288`|`15.71ns ± 292.17ps`|`24.51ns`|`10.81ns - 44.74ns`|
|WeakMap store|`524288`|`19.31ns ± 358.35ps`|`34.44ns`|`12.91ns - 35.64ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function without constructor|`1048576`|`13.1ns ± 258.88ps`|`36.76ns`|`6.7ns - 43.2ns`|
|class with constructor|`1048576`|`13.57ns ± 348.53ps`|`38.87ns`|`6.85ns - 44.05ns`|
|Object.create()|`1048576`|`15.26ns ± 328.4ps`|`38.89ns`|`7.57ns - 45.56ns`|
|class with default initializer, without constructor|`1048576`|`15.76ns ± 489.27ps`|`43.97ns`|`6.87ns - 51.1ns`|
|function constructor|`1048576`|`20.96ns ± 719.44ps`|`47.48ns`|`11.31ns - 50.64ns`|
|class without constructor|`1048576`|`28.3ns ± 650.73ps`|`51.11ns`|`11.58ns - 60.63ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`122.74ns ± 1.29ns`|`191.99ns`|`109.84ns - 194.64ns`|
|Object.create(null)|`524288`|`279.28ns ± 1.12ns`|`335.44ns`|`265.15ns - 341.85ns`|
|object literal (computed properties)|`524288`|`1.03μs ± 7.21ns`|`1.17μs`|`956.93ns - 1.18μs`|
|function constructor|`524288`|`1.08μs ± 6.81ns`|`1.25μs`|`1.01μs - 1.26μs`|
|function constructor (freezed proto)|`524288`|`1.09μs ± 8.41ns`|`1.25μs`|`1.01μs - 1.37μs`|
|object literal|`524288`|`1.11μs ± 7.3ns`|`1.24μs`|`1.03μs - 1.25μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`15.3ns ± 2.73ns`|`148.79ns`|`1.8ns - 178.82ns`|
|constructor|`524288`|`39.1ns ± 3.37ns`|`190.17ns`|`1.74ns - 197.79ns`|
|Object.create()|`524288`|`62.16ns ± 4.39ns`|`182.82ns`|`1.69ns - 185.65ns`|
|object spread|`524288`|`87.85ns ± 1.36ns`|`141.81ns`|`60.31ns - 214.11ns`|
|Object.setPrototypeOf()|`524288`|`217.73ns ± 3.04ns`|`403.25ns`|`196.48ns - 431.46ns`|
|set __proto__|`524288`|`294.4ns ± 6.42ns`|`428.3ns`|`184.12ns - 445.06ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`59.2ns ± 366.52ps`|`72.35ns`|`31.93ns - 97.34ns`|
|Set|`1048576`|`157.74ns ± 1.39ns`|`276.68ns`|`129.55ns - 293.8ns`|
|Set direct assign|`1048576`|`174.18ns ± 1.56ns`|`295.61ns`|`146.41ns - 337.6ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`63.25ns ± 830.69ps`|`101.55ns`|`32.02ns - 147.57ns`|
|Set|`1048576`|`91.91ns ± 447.86ps`|`109.9ns`|`65.79ns - 138.17ns`|
|Set direct assign|`1048576`|`112.98ns ± 1.1ns`|`180.97ns`|`86.12ns - 216ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`135.25ns ± 943.17ps`|`215.22ns`|`113.64ns - 221.29ns`|
|Set|`1048576`|`168.53ns ± 620.76ps`|`198.76ns`|`155.16ns - 233.38ns`|
|Set direct assign|`1048576`|`185ns ± 1.13ns`|`268.43ns`|`164.21ns - 317.55ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`97.67ns ± 488.07ps`|`114.18ns`|`69.96ns - 153.29ns`|
|Set direct assign|`1048576`|`113.94ns ± 830.08ps`|`167.82ns`|`87.95ns - 220.67ns`|
|Array.includes()|`1048576`|`134.85ns ± 642.73ps`|`157.31ns`|`121.22ns - 226.14ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`111.51ns ± 1.1ns`|`205.38ns`|`81.02ns - 218.26ns`|
|Set|`1048576`|`204.16ns ± 1.62ns`|`383.67ns`|`173.08ns - 408.41ns`|
|Set direct assign|`1048576`|`212.92ns ± 924.53ps`|`245.53ns`|`183.38ns - 342.55ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`108.13ns ± 890.39ps`|`175.45ns`|`84.86ns - 207.83ns`|
|Set direct assign|`1048576`|`122.33ns ± 1.07ns`|`193.86ns`|`92.56ns - 211.2ns`|
|Array.includes()|`1048576`|`241.38ns ± 1.88ns`|`407.94ns`|`219.15ns - 435.67ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`162.55ns ± 1.53ns`|`289.24ns`|`127.43ns - 361.71ns`|
|Set direct assign|`1048576`|`266.38ns ± 1.54ns`|`313.79ns`|`245.86ns - 518.13ns`|
|Set|`1048576`|`331.89ns ± 3.02ns`|`537.94ns`|`302.53ns - 637.32ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`127.66ns ± 949.12ps`|`195.46ns`|`113.2ns - 218.5ns`|
|Set|`1048576`|`176.03ns ± 1.07ns`|`213.3ns`|`154.75ns - 314.91ns`|
|Array.includes()|`1048576`|`425.99ns ± 1.51ns`|`457.97ns`|`399.34ns - 771.33ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`217.74ns ± 935.88ps`|`257.35ns`|`189.37ns - 260.36ns`|
|Array.includes()|`524288`|`233.44ns ± 822.08ps`|`258.52ns`|`211.49ns - 267.02ns`|
|Set direct assign|`524288`|`244.67ns ± 2.36ns`|`384.9ns`|`225.66ns - 487.78ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`152.22ns ± 1.73ns`|`256.23ns`|`131.36ns - 256.67ns`|
|Set direct assign|`524288`|`178.3ns ± 2.53ns`|`313.17ns`|`148.93ns - 324ns`|
|Array.includes()|`524288`|`251.74ns ± 4.33ns`|`421.36ns`|`221.88ns - 435.47ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`259.22ns ± 2.9ns`|`458.4ns`|`241.88ns - 499.18ns`|
|Set direct assign|`524288`|`275.48ns ± 3.22ns`|`534.32ns`|`256.18ns - 546.42ns`|
|Array.includes()|`524288`|`500.91ns ± 5.16ns`|`774.46ns`|`462.04ns - 778.57ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`163.8ns ± 1.25ns`|`195.81ns`|`148.8ns - 276.82ns`|
|Set direct assign|`524288`|`188.04ns ± 2.99ns`|`327.4ns`|`149.17ns - 330.3ns`|
|Array.includes()|`524288`|`488.74ns ± 3.29ns`|`583.74ns`|`459.74ns - 884.14ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`283.37ns ± 3.02ns`|`516.57ns`|`260.73ns - 534.8ns`|
|Set direct assign|`524288`|`320.26ns ± 1.42ns`|`363.13ns`|`305.54ns - 470.71ns`|
|Set|`524288`|`379.75ns ± 4.54ns`|`719.52ns`|`347.36ns - 738.59ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`190.83ns ± 2.46ns`|`351.15ns`|`168.76ns - 352.58ns`|
|Set|`524288`|`231.5ns ± 1.63ns`|`257.93ns`|`207.71ns - 411.87ns`|
|Array.includes()|`524288`|`981.79ns ± 8.85ns`|`1.51μs`|`937.97ns - 1.86μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`545.29ns ± 5.31ns`|`959ns`|`513.59ns - 1.07μs`|
|Set|`524288`|`588.48ns ± 5.93ns`|`971.46ns`|`561.7ns - 1.12μs`|
|Array.includes()|`524288`|`857.44ns ± 1.49ns`|`942.97ns`|`835.08ns - 963.43ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`288.45ns ± 2.38ns`|`416.39ns`|`261.97ns - 543.37ns`|
|Set|`524288`|`330.76ns ± 2.12ns`|`473.58ns`|`308.13ns - 529.72ns`|
|Array.includes()|`524288`|`861.74ns ± 3.6ns`|`1.11μs`|`840.82ns - 1.18μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`682.4ns ± 3.4ns`|`713.38ns`|`653.09ns - 713.38ns`|
|Set direct assign|`131072`|`741.87ns ± 16.08ns`|`1.1μs`|`664.9ns - 1.1μs`|
|Array.includes()|`131072`|`3.92μs ± 37.6ns`|`4.28μs`|`3.76μs - 4.28μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`558.88ns ± 14.79ns`|`927.6ns`|`516.7ns - 927.6ns`|
|Set direct assign|`131072`|`560.92ns ± 10.69ns`|`733.05ns`|`519.12ns - 733.05ns`|
|Array.includes()|`131072`|`3.97μs ± 42.45ns`|`4.32μs`|`3.76μs - 4.32μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`901.69ns ± 26.38ns`|`1.73μs`|`865.3ns - 1.73μs`|
|Set direct assign|`131072`|`999.02ns ± 14.19ns`|`1.13μs`|`915.14ns - 1.13μs`|
|Array.includes()|`131072`|`4.39μs ± 38.32ns`|`4.82μs`|`4.11μs - 4.82μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`647.69ns ± 5.35ns`|`805.88ns`|`618.68ns - 805.88ns`|
|Set direct assign|`131072`|`720.64ns ± 12.35ns`|`861.07ns`|`661.09ns - 861.07ns`|
|Array.includes()|`131072`|`4.46μs ± 45.23ns`|`4.83μs`|`4.12μs - 4.83μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.39μs ± 13.07ns`|`1.53μs`|`1.33μs - 1.53μs`|
|Set|`131072`|`1.44μs ± 28.16ns`|`1.68μs`|`1.31μs - 1.68μs`|
|Array.includes()|`131072`|`6.11μs ± 32.6ns`|`6.56μs`|`5.87μs - 6.56μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`822.01ns ± 6.29ns`|`1μs`|`798.63ns - 1μs`|
|Set direct assign|`131072`|`913.6ns ± 12.98ns`|`1.05μs`|`836.83ns - 1.05μs`|
|Array.includes()|`131072`|`6.15μs ± 37.16ns`|`6.57μs`|`5.88μs - 6.57μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.15μs ± 11.98ns`|`2.28μs`|`2.09μs - 2.28μs`|
|Set|`131072`|`2.25μs ± 26.57ns`|`2.46μs`|`2.09μs - 2.46μs`|
|Array.includes()|`131072`|`5.68μs ± 38.73ns`|`6.1μs`|`5.39μs - 6.1μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.2μs ± 9.71ns`|`1.29μs`|`1.15μs - 1.29μs`|
|Set|`131072`|`1.24μs ± 21.58ns`|`1.5μs`|`1.14μs - 1.5μs`|
|Array.includes()|`131072`|`16.83μs ± 42.1ns`|`17.18μs`|`16.44μs - 17.18μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`128.79ns ± 1.73ns`|`210.09ns`|`106.14ns - 240.63ns`|
|await non-promise|`524288`|`142.55ns ± 1.38ns`|`229.92ns`|`128.31ns - 258.22ns`|
|generator|`524288`|`161.49ns ± 2.22ns`|`284.97ns`|`139.62ns - 288.33ns`|
|async generator|`524288`|`599.6ns ± 17.13ns`|`1.32μs`|`197.76ns - 1.82μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.35μs ± 24.58ns`|`1.58μs`|`987.43ns - 1.58μs`|
|generator|`131072`|`2.02μs ± 2.83ns`|`2.07μs`|`2.01μs - 2.07μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`158.2ns ± 1.17ns`|`226.55ns`|`142.69ns - 248.41ns`|`158.2ns ± 84.96ns`|`1.2μs`|`1.05μs - 1.22μs`|
|map|`524288`|`192.71ns ± 1.75ns`|`300.57ns`|`175.22ns - 322.89ns`|`192.71ns ± 81.07ns`|`1.2μs`|`996.94ns - 1.21μs`|
|linked list map|`524288`|`228.14ns ± 1.45ns`|`324.37ns`|`210.54ns - 332.91ns`|`228.14ns ± 81.95ns`|`1.53μs`|`1.06μs - 1.53μs`|
|two object buckets|`524288`|`295.82ns ± 3.87ns`|`465.94ns`|`258.42ns - 493.11ns`|`295.82ns ± 74.91ns`|`1.45μs`|`1.06μs - 1.81μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`23.82ns ± 418.26ps`|`36.96ns`|`18.41ns - 63.81ns`|`23.82ns ± 108.84ns`|`1.46μs`|`1.11μs - 1.64μs`|
|linked list map|`524288`|`25.52ns ± 427.5ps`|`46.91ns`|`15.45ns - 56.47ns`|`25.52ns ± 106.76ns`|`1.48μs`|`1.09μs - 1.55μs`|
|two map buckets|`524288`|`35.59ns ± 538.25ps`|`59.63ns`|`27.69ns - 84.26ns`|`35.59ns ± 100.35ns`|`1.27μs`|`997.69ns - 1.27μs`|
|two object buckets|`524288`|`48.52ns ± 462.5ps`|`64.19ns`|`40.95ns - 70.69ns`|`48.52ns ± 97.48ns`|`1.29μs`|`1.08μs - 1.34μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`61.62ns ± 524.25ps`|`76.75ns`|`38.37ns - 95.5ns`|`61.62ns ± 96.29ns`|`1.34μs`|`1.07μs - 1.39μs`|
|two object buckets|`524288`|`87.23ns ± 442.83ps`|`111.84ns`|`80.73ns - 112.36ns`|`87.23ns ± 93.66ns`|`1.22μs`|`1.08μs - 1.23μs`|
|map|`524288`|`93.59ns ± 969.61ps`|`140.99ns`|`67.12ns - 141.01ns`|`93.59ns ± 95.39ns`|`1.27μs`|`1.06μs - 1.33μs`|
|linked list map|`524288`|`127.15ns ± 895ps`|`169.35ns`|`108.64ns - 171.31ns`|`127.15ns ± 93.11ns`|`1.28μs`|`1.1μs - 1.32μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`186.28ns ± 1.22ns`|`268.69ns`|`173.38ns - 269.32ns`|`186.28ns ± 84.15ns`|`1.21μs`|`1.07μs - 1.21μs`|
|linked list map|`524288`|`246.11ns ± 817.33ps`|`280.36ns`|`236.11ns - 297.92ns`|`246.11ns ± 79.67ns`|`1.21μs`|`1.08μs - 1.23μs`|
|map|`524288`|`256.05ns ± 3.3ns`|`377.12ns`|`225.85ns - 377.87ns`|`256.05ns ± 76.75ns`|`1.21μs`|`1.06μs - 1.23μs`|
|two object buckets|`524288`|`290.89ns ± 1.37ns`|`367.67ns`|`273.76ns - 373.43ns`|`290.89ns ± 75.88ns`|`1.24μs`|`1.07μs - 1.28μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.18ns ± 498.01ps`|`39.93ns`|`16.54ns - 69.83ns`|`27.18ns ± 106.51ns`|`1.48μs`|`1.14μs - 1.75μs`|
|linked list map|`524288`|`27.78ns ± 557.19ps`|`58.38ns`|`23.55ns - 80.53ns`|`27.78ns ± 107.81ns`|`1.44μs`|`1.11μs - 1.49μs`|
|two map buckets|`524288`|`44.55ns ± 506.4ps`|`67.5ns`|`34.53ns - 76.75ns`|`44.55ns ± 98.99ns`|`1.28μs`|`1.08μs - 1.32μs`|
|two object buckets|`524288`|`54.08ns ± 506.29ps`|`70.23ns`|`38.19ns - 94.09ns`|`54.08ns ± 97.19ns`|`1.29μs`|`1.08μs - 1.34μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.52ns ± 449.02ps`|`81.56ns`|`59.55ns - 94.73ns`|`65.52ns ± 96.27ns`|`1.25μs`|`1.06μs - 1.3μs`|
|two object buckets|`524288`|`85.57ns ± 797.03ps`|`130.82ns`|`77.22ns - 144.84ns`|`85.57ns ± 95.29ns`|`1.26μs`|`1.09μs - 1.26μs`|
|map|`524288`|`114.15ns ± 831.01ps`|`155.11ns`|`90.54ns - 161.29ns`|`114.15ns ± 91.22ns`|`1.34μs`|`1.08μs - 1.36μs`|
|linked list map|`524288`|`121.28ns ± 712.24ps`|`152ns`|`97.12ns - 169.19ns`|`121.28ns ± 92.55ns`|`1.26μs`|`1.08μs - 1.27μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`160.48ns ± 2.12ns`|`215.37ns`|`132.83ns - 277.54ns`|`160.48ns ± 88.85ns`|`1.25μs`|`1.11μs - 1.26μs`|
|linked list map|`524288`|`224.16ns ± 2.23ns`|`291.27ns`|`191.11ns - 314.35ns`|`224.16ns ± 85.21ns`|`1.31μs`|`1.11μs - 1.81μs`|
|two object buckets|`524288`|`251.15ns ± 1.89ns`|`294.47ns`|`211.43ns - 325.86ns`|`251.15ns ± 80.78ns`|`1.24μs`|`1.09μs - 1.31μs`|
|map|`524288`|`411.81ns ± 3.63ns`|`516.07ns`|`359.75ns - 522.21ns`|`411.81ns ± 66.73ns`|`1.25μs`|`1.1μs - 1.5μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`36.91ns ± 425.42ps`|`48.69ns`|`32.66ns - 73.7ns`|`36.91ns ± 107.45ns`|`1.33μs`|`1.12μs - 1.34μs`|
|linked list map|`524288`|`37.53ns ± 503.5ps`|`75.33ns`|`33.91ns - 77.77ns`|`37.53ns ± 108.72ns`|`1.35μs`|`1.15μs - 1.37μs`|
|two map buckets|`524288`|`55.05ns ± 505.18ps`|`75.97ns`|`48.9ns - 89.93ns`|`55.05ns ± 100.73ns`|`1.28μs`|`1.13μs - 1.35μs`|
|two object buckets|`524288`|`63ns ± 479.64ps`|`83.83ns`|`56.5ns - 90.11ns`|`63ns ± 99.56ns`|`1.29μs`|`1.12μs - 1.33μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`66.57ns ± 681.54ps`|`101.91ns`|`60.96ns - 112.94ns`|`66.57ns ± 100.09ns`|`1.28μs`|`1.13μs - 1.33μs`|
|two object buckets|`524288`|`86.72ns ± 672.33ps`|`118.89ns`|`77.93ns - 120.32ns`|`86.72ns ± 99.71ns`|`1.33μs`|`1.12μs - 1.38μs`|
|linked list map|`524288`|`125.4ns ± 738.81ps`|`152.28ns`|`94.15ns - 154.47ns`|`125.4ns ± 99.98ns`|`1.53μs`|`1.15μs - 1.69μs`|
|map|`524288`|`275.89ns ± 979.87ps`|`328.14ns`|`241.73ns - 365.16ns`|`275.89ns ± 84.31ns`|`1.36μs`|`1.12μs - 1.38μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`188.84ns ± 2.76ns`|`261.18ns`|`153.25ns - 275.37ns`|`188.84ns ± 100.88ns`|`1.48μs`|`1.21μs - 1.49μs`|
|linked list map|`524288`|`280.8ns ± 4.2ns`|`433.34ns`|`236.81ns - 438ns`|`280.8ns ± 91.1ns`|`1.43μs`|`1.23μs - 1.44μs`|
|two object buckets|`524288`|`343.12ns ± 3.72ns`|`454.5ns`|`270.45ns - 477ns`|`343.12ns ± 94.63ns`|`1.71μs`|`1.3μs - 1.85μs`|
|map|`524288`|`1.68μs ± 9.73ns`|`2.1μs`|`1.55μs - 2.11μs`|`1.68μs ± 19.57ns`|`1.76μs`|`1.32μs - 1.93μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`27.48ns ± 491.15ps`|`66.08ns`|`24.14ns - 66.1ns`|`27.48ns ± 130.47ns`|`1.63μs`|`1.38μs - 1.7μs`|
|two map buckets|`524288`|`32.35ns ± 486.83ps`|`63.19ns`|`26.67ns - 69.98ns`|`32.35ns ± 136.41ns`|`1.75μs`|`1.46μs - 2.28μs`|
|linked list map|`524288`|`61.69ns ± 611.82ps`|`83.18ns`|`53.31ns - 93.33ns`|`61.69ns ± 135.64ns`|`1.74μs`|`1.47μs - 1.82μs`|
|map|`524288`|`121.11ns ± 508.66ps`|`143.05ns`|`113.8ns - 162.83ns`|`121.11ns ± 121.16ns`|`1.64μs`|`1.31μs - 1.65μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`48.17ns ± 431.04ps`|`58.63ns`|`36.97ns - 81.43ns`|`48.17ns ± 157.79ns`|`1.99μs`|`1.64μs - 2.02μs`|
|two object buckets|`524288`|`52.22ns ± 525.15ps`|`67.36ns`|`28.3ns - 96.8ns`|`52.22ns ± 140.23ns`|`1.83μs`|`1.49μs - 2.05μs`|
|linked list map|`524288`|`59.36ns ± 546ps`|`70.01ns`|`38.06ns - 97.83ns`|`59.36ns ± 141.16ns`|`1.82μs`|`1.48μs - 1.85μs`|
|map|`524288`|`118.84ns ± 566.62ps`|`149.23ns`|`108.28ns - 151.48ns`|`118.84ns ± 135.42ns`|`1.78μs`|`1.48μs - 1.84μs`|

