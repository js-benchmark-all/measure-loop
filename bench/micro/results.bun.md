# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`388.09ps ± 2.65ps`|`953.86ps`|`317.87ps - 6.54ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`1.39ns ± 8.61ps`|`1.92ns`|`1.32ns - 2.08ns`|
|monomorphic array|`524288`|`1.55ns ± 83.32ps`|`6.88ns`|`1.32ns - 7.07ns`|
|polymorphic object|`524288`|`2.09ns ± 52.67ps`|`6.44ns`|`1.96ns - 6.5ns`|
|monomorphic object|`524288`|`2.24ns ± 121.79ps`|`7.06ns`|`1.5ns - 8.23ns`|
|megamorphic object|`524288`|`7.62ns ± 86.16ps`|`13.28ns`|`7.29ns - 14.28ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`2.05ns ± 35.85ps`|`3.99ns`|`1.89ns - 5.75ns`|
|monomorphic object|`524288`|`3.13ns ± 69.24ps`|`5.39ns`|`2.76ns - 8.65ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.37ns ± 75.79ps`|`14.04ns`|`9.1ns - 16.05ns`|
|WeakMap store|`524288`|`14.63ns ± 265.58ps`|`21.27ns`|`6.57ns - 26.57ns`|
|prototype chain (override prototype)|`524288`|`24.26ns ± 138.21ps`|`31.02ns`|`23.73ns - 34.62ns`|
|prototype chain (create with prototype)|`524288`|`24.28ns ± 159.88ps`|`27.73ns`|`23.8ns - 43.08ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function without constructor|`1048576`|`3.9ns ± 88.16ps`|`5.59ns`|`3.34ns - 22.62ns`|
|class with constructor|`1048576`|`3.98ns ± 89.98ps`|`8.56ns`|`3.62ns - 16.69ns`|
|function constructor|`1048576`|`4.68ns ± 149.1ps`|`9.01ns`|`4.2ns - 31.62ns`|
|Object.create()|`1048576`|`4.98ns ± 108.76ps`|`9.04ns`|`4.67ns - 31.57ns`|
|class without constructor|`1048576`|`5.45ns ± 288.82ps`|`9.69ns`|`4.72ns - 62.08ns`|
|class with default initializer, without constructor|`1048576`|`6.07ns ± 265.4ps`|`11.16ns`|`4.83ns - 49.03ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`51.46ns ± 1.6ns`|`109.18ns`|`45.69ns - 224.08ns`|
|Object.create(null)|`524288`|`321.9ns ± 2.52ns`|`500.33ns`|`310.86ns - 506.04ns`|
|object literal|`524288`|`325.86ns ± 3.2ns`|`506.68ns`|`310.05ns - 512.36ns`|
|function constructor|`524288`|`342.32ns ± 3.26ns`|`566.92ns`|`330.8ns - 641.44ns`|
|object literal (computed properties)|`524288`|`383.05ns ± 8.64ns`|`733.93ns`|`313.13ns - 797.71ns`|
|function constructor (freezed proto)|`524288`|`387.94ns ± 8.89ns`|`831.84ns`|`329.72ns - 895.07ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`956.2ps ± 0.52ps`|`973.63ps`|`946.53ps - 978.52ps`|
|constructor|`524288`|`961.46ps ± 2.16ps`|`985.6ps`|`948.97ps - 1.23ns`|
|Object.create()|`524288`|`1.03ns ± 48.56ps`|`5.34ns`|`946.78ps - 5.43ns`|
|set __proto__|`524288`|`30.1ns ± 169.55ps`|`35.46ns`|`29.09ns - 35.57ns`|
|Object.setPrototypeOf()|`524288`|`39.27ns ± 180.34ps`|`43.4ns`|`38.17ns - 51.22ns`|
|object spread|`524288`|`165.32ns ± 2.68ns`|`331.42ns`|`153.84ns - 333.3ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`28.63ns ± 649.4ps`|`55.54ns`|`23.08ns - 88.07ns`|
|Set|`1048576`|`166.86ns ± 2.38ns`|`302.85ns`|`149.42ns - 304.36ns`|
|Set direct assign|`1048576`|`247.39ns ± 2.25ns`|`473.1ns`|`232.26ns - 489.52ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`28.4ns ± 600.75ps`|`54.5ns`|`23.13ns - 80.05ns`|
|Set|`1048576`|`108.56ns ± 1.58ns`|`189.9ns`|`95.76ns - 222.58ns`|
|Set direct assign|`1048576`|`183.84ns ± 2.16ns`|`340.13ns`|`170.14ns - 370.36ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`48.68ns ± 1.12ns`|`84.73ns`|`37.6ns - 138.25ns`|
|Set|`1048576`|`184.99ns ± 2.09ns`|`344.65ns`|`169.59ns - 353ns`|
|Set direct assign|`1048576`|`271.59ns ± 2.22ns`|`508.34ns`|`261.75ns - 522.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`44.16ns ± 820.16ps`|`82.79ns`|`37.14ns - 83.28ns`|
|Set|`1048576`|`129.5ns ± 2.25ns`|`217.72ns`|`109.76ns - 289.97ns`|
|Set direct assign|`1048576`|`193.89ns ± 1.79ns`|`365.25ns`|`183.95ns - 424.09ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`92.44ns ± 760.15ps`|`144.49ns`|`80.44ns - 215.24ns`|
|Set|`1048576`|`200.99ns ± 2.27ns`|`375.66ns`|`185.17ns - 531.71ns`|
|Set direct assign|`1048576`|`323.63ns ± 5.55ns`|`544.72ns`|`273.13ns - 550.59ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`101.49ns ± 2.11ns`|`195.79ns`|`78.71ns - 258.28ns`|
|Set|`1048576`|`127.62ns ± 1.71ns`|`224.98ns`|`113.58ns - 275.65ns`|
|Set direct assign|`1048576`|`201.92ns ± 3.07ns`|`428.35ns`|`186.64ns - 606.26ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`157.73ns ± 1.22ns`|`227.91ns`|`145.95ns - 335.82ns`|
|Set|`1048576`|`311.35ns ± 3.03ns`|`593.91ns`|`294.96ns - 624.37ns`|
|Set direct assign|`1048576`|`392.8ns ± 2.35ns`|`523.62ns`|`378.08ns - 753.96ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`150.97ns ± 1.14ns`|`175.65ns`|`138.66ns - 348.92ns`|
|Set|`1048576`|`204.09ns ± 1.7ns`|`363.27ns`|`191.37ns - 375.18ns`|
|Set direct assign|`1048576`|`270.71ns ± 517.84ps`|`287.81ns`|`265.29ns - 361.11ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`71.57ns ± 268.37ps`|`78.89ns`|`68.92ns - 82.35ns`|
|Set|`524288`|`270.23ns ± 2.18ns`|`378.23ns`|`259.91ns - 471.45ns`|
|Set direct assign|`524288`|`439.47ns ± 3.7ns`|`649.8ns`|`427.08ns - 825.12ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`70.29ns ± 268.71ps`|`78.02ns`|`67.6ns - 79.62ns`|
|Set|`524288`|`204.04ns ± 2.11ns`|`385.68ns`|`195ns - 387.73ns`|
|Set direct assign|`524288`|`358.21ns ± 2.98ns`|`537.53ns`|`348.82ns - 683.1ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`145.48ns ± 3.29ns`|`300.89ns`|`131.59ns - 306.85ns`|
|Set|`524288`|`277.8ns ± 3.6ns`|`528.87ns`|`265.72ns - 542.81ns`|
|Set direct assign|`524288`|`437.2ns ± 5.12ns`|`782.17ns`|`417.12ns - 832.23ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`133.45ns ± 673.99ps`|`155.79ns`|`128.32ns - 202.54ns`|
|Set|`524288`|`199.11ns ± 1.57ns`|`308.73ns`|`190.43ns - 342.42ns`|
|Set direct assign|`524288`|`344.24ns ± 2.74ns`|`518.99ns`|`332.07ns - 559.28ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`254.65ns ± 1.12ns`|`309.61ns`|`248.63ns - 372.01ns`|
|Set|`524288`|`396.1ns ± 6.8ns`|`742.03ns`|`372.01ns - 747.08ns`|
|Set direct assign|`524288`|`535.39ns ± 4.18ns`|`681.71ns`|`521.64ns - 1.04μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`243.06ns ± 523.34ps`|`276.4ns`|`234.69ns - 292.49ns`|
|Set|`524288`|`287.21ns ± 4.93ns`|`518.93ns`|`269.25ns - 519.05ns`|
|Set direct assign|`524288`|`415.26ns ± 1.34ns`|`484.88ns`|`406.32ns - 543.53ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`466.14ns ± 11.71ns`|`947.1ns`|`417.12ns - 957.63ns`|
|Set|`524288`|`541.98ns ± 1.08ns`|`588.33ns`|`532.46ns - 636.34ns`|
|Set direct assign|`524288`|`715.09ns ± 10.24ns`|`1.25μs`|`667.83ns - 1.33μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`319.45ns ± 627.46ps`|`356.09ns`|`313.09ns - 373.13ns`|
|Array.includes()|`524288`|`408.95ns ± 4.1ns`|`645.15ns`|`392.22ns - 847.39ns`|
|Set direct assign|`524288`|`458.17ns ± 4.77ns`|`864.49ns`|`443.58ns - 867.86ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`131072`|`849.23ns ± 2.55ns`|`919.73ns`|`832.92ns - 919.73ns`|
|Set|`131072`|`855.54ns ± 4.62ns`|`949.25ns`|`834.79ns - 949.25ns`|
|Set direct assign|`131072`|`1.4μs ± 1.39ns`|`1.42μs`|`1.39μs - 1.42μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`739.78ns ± 4.11ns`|`858.37ns`|`728.63ns - 858.37ns`|
|Array.includes()|`131072`|`793.35ns ± 1.86ns`|`837.02ns`|`782.79ns - 837.02ns`|
|Set direct assign|`131072`|`1.29μs ± 4.82ns`|`1.41μs`|`1.27μs - 1.41μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.03μs ± 2.32ns`|`1.08μs`|`1.02μs - 1.08μs`|
|Array.includes()|`131072`|`1.49μs ± 4.2ns`|`1.58μs`|`1.47μs - 1.58μs`|
|Set direct assign|`131072`|`1.57μs ± 3.87ns`|`1.68μs`|`1.56μs - 1.68μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`798.52ns ± 1.88ns`|`835.95ns`|`789.8ns - 835.95ns`|
|Set direct assign|`131072`|`1.34μs ± 2.98ns`|`1.43μs`|`1.33μs - 1.43μs`|
|Array.includes()|`131072`|`1.44μs ± 14.02ns`|`1.76μs`|`1.4μs - 1.76μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.56μs ± 8.45ns`|`1.7μs`|`1.53μs - 1.7μs`|
|Set direct assign|`131072`|`2.17μs ± 3.22ns`|`2.21μs`|`2.14μs - 2.21μs`|
|Array.includes()|`131072`|`3.19μs ± 9.79ns`|`3.45μs`|`3.14μs - 3.45μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.11μs ± 3.31ns`|`1.18μs`|`1.09μs - 1.18μs`|
|Set direct assign|`131072`|`1.7μs ± 8.05ns`|`1.88μs`|`1.66μs - 1.88μs`|
|Array.includes()|`131072`|`3.08μs ± 3.13ns`|`3.14μs`|`3.04μs - 3.14μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.08μs ± 7.98ns`|`2.25μs`|`2.04μs - 2.25μs`|
|Set direct assign|`131072`|`2.66μs ± 8.01ns`|`2.82μs`|`2.61μs - 2.82μs`|
|Array.includes()|`131072`|`6.34μs ± 27.69ns`|`7.2μs`|`6.26μs - 7.2μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.28μs ± 4.48ns`|`1.36μs`|`1.26μs - 1.36μs`|
|Set direct assign|`131072`|`1.84μs ± 3.38ns`|`1.91μs`|`1.82μs - 1.91μs`|
|Array.includes()|`131072`|`5.9μs ± 6.86ns`|`6μs`|`5.84μs - 6μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`57.45ns ± 1.52ns`|`102.55ns`|`48.06ns - 125.98ns`|
|await promise|`524288`|`166.52ns ± 1.51ns`|`203.2ns`|`158.96ns - 347.17ns`|
|await non-promise|`524288`|`171.12ns ± 3.64ns`|`357.17ns`|`156.09ns - 484.11ns`|
|async generator|`524288`|`900.85ns ± 5.89ns`|`1.23μs`|`869.84ns - 1.31μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.25μs ± 4.15ns`|`1.37μs`|`1.23μs - 1.37μs`|
|generator|`131072`|`2.52μs ± 69.45ns`|`4.05μs`|`2.39μs - 4.05μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`87.17ns ± 1.82ns`|`189.55ns`|`77.71ns - 200.21ns`|`87.17ns ± 11.87ns`|`440.65ns`|`180.04ns - 607.63ns`|
|linked list map|`524288`|`140.28ns ± 3.63ns`|`341.72ns`|`121.33ns - 382.4ns`|`140.28ns ± 7.78ns`|`401.32ns`|`188.48ns - 437.1ns`|
|map|`524288`|`152.82ns ± 3.24ns`|`332.19ns`|`134.77ns - 359.93ns`|`152.82ns ± 7.78ns`|`564.54ns`|`185.31ns - 733.33ns`|
|two object buckets|`524288`|`312.28ns ± 3.27ns`|`535.17ns`|`295.89ns - 543.3ns`|`312.28ns ± 7.56ns`|`417.31ns`|`200.02ns - 446.9ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`11.88ns ± 199.1ps`|`18.56ns`|`8.98ns - 23.66ns`|`11.88ns ± 16.19ns`|`284.17ns`|`170.32ns - 287.1ns`|
|linked list map|`524288`|`12.05ns ± 305.8ps`|`21.94ns`|`5.2ns - 28.09ns`|`12.05ns ± 521.38ns`|`14.81μs`|`175.14ns - 15.2μs`|
|two map buckets|`524288`|`21.58ns ± 431.24ps`|`41.22ns`|`16.1ns - 42.64ns`|`21.58ns ± 18.03ns`|`536.04ns`|`176ns - 569.68ns`|
|two object buckets|`524288`|`104.84ns ± 1.37ns`|`178.6ns`|`92.8ns - 179.59ns`|`104.84ns ± 10.32ns`|`403.48ns`|`179.45ns - 409.77ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`44.36ns ± 484.3ps`|`68.4ns`|`40.75ns - 74.85ns`|`44.36ns ± 14.45ns`|`302.32ns`|`176.49ns - 394.22ns`|
|linked list map|`524288`|`91.94ns ± 1.1ns`|`156.29ns`|`84.9ns - 165.13ns`|`91.94ns ± 17.96ns`|`843.38ns`|`185.89ns - 1.75μs`|
|map|`524288`|`101.6ns ± 970.23ps`|`160.52ns`|`93.92ns - 169.12ns`|`101.6ns ± 10.74ns`|`355.9ns`|`179.48ns - 567.31ns`|
|two object buckets|`524288`|`211.3ns ± 1.49ns`|`331.8ns`|`189.52ns - 334.08ns`|`211.3ns ± 3.86ns`|`437.22ns`|`196.35ns - 530.18ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`78.85ns ± 1.12ns`|`134.34ns`|`70.85ns - 155.06ns`|`78.85ns ± 15.21ns`|`539.12ns`|`187.03ns - 1.09μs`|
|linked list map|`524288`|`141.15ns ± 6.7ns`|`535.84ns`|`114.83ns - 627.7ns`|`141.15ns ± 10.51ns`|`691.22ns`|`193.33ns - 796.46ns`|
|map|`524288`|`244.32ns ± 8.17ns`|`584.11ns`|`193.82ns - 842.83ns`|`244.32ns ± 3.8ns`|`419.84ns`|`185.46ns - 483.54ns`|
|two object buckets|`524288`|`306.2ns ± 2.06ns`|`428.3ns`|`286.48ns - 452.66ns`|`306.2ns ± 13.03ns`|`465.02ns`|`207.83ns - 1.79μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`13.43ns ± 259.71ps`|`23.12ns`|`7.41ns - 26.15ns`|`13.43ns ± 17.55ns`|`312.45ns`|`176.97ns - 387.45ns`|
|linked list map|`524288`|`15.95ns ± 334.02ps`|`31.58ns`|`10.85ns - 31.8ns`|`15.95ns ± 23.66ns`|`731.66ns`|`179.02ns - 1.29μs`|
|two map buckets|`524288`|`28.78ns ± 422.36ps`|`43.79ns`|`22.06ns - 49.11ns`|`28.78ns ± 18.49ns`|`503.23ns`|`178.69ns - 641.5ns`|
|two object buckets|`524288`|`113.3ns ± 1.26ns`|`177.54ns`|`100.94ns - 179.91ns`|`113.3ns ± 12.59ns`|`686.61ns`|`194.32ns - 860.71ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`40.96ns ± 429.56ps`|`67.76ns`|`38.11ns - 73.14ns`|`40.96ns ± 20.14ns`|`559.15ns`|`186.3ns - 1.44μs`|
|linked list map|`524288`|`85.65ns ± 1.64ns`|`179.57ns`|`77.71ns - 217.32ns`|`85.65ns ± 13.87ns`|`530.79ns`|`192.3ns - 571.03ns`|
|map|`524288`|`182.2ns ± 3.52ns`|`356.41ns`|`151.76ns - 424.41ns`|`182.2ns ± 5.52ns`|`438.12ns`|`193.16ns - 535.2ns`|
|two object buckets|`524288`|`216.31ns ± 2.09ns`|`384.9ns`|`194.15ns - 386.15ns`|`216.31ns ± 7.98ns`|`510.88ns`|`207.79ns - 1.1μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`84.6ns ± 1.79ns`|`163.57ns`|`72.9ns - 163.61ns`|`84.6ns ± 20.6ns`|`667.73ns`|`222.35ns - 1.32μs`|
|linked list map|`524288`|`135.34ns ± 2.97ns`|`294.95ns`|`117ns - 350.94ns`|`135.34ns ± 11.77ns`|`376.38ns`|`222.23ns - 378.68ns`|
|two object buckets|`524288`|`244.49ns ± 1.49ns`|`278.3ns`|`229.23ns - 406.75ns`|`244.49ns ± 5.39ns`|`577.4ns`|`219.45ns - 693.69ns`|
|map|`524288`|`908.23ns ± 19.62ns`|`1.86μs`|`698.44ns - 2.02μs`|`908.23ns ± 57.64ns`|`411ns`|`212.01ns - 420.21ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`20.44ns ± 332.26ps`|`34.99ns`|`12.02ns - 37.46ns`|`20.44ns ± 29.04ns`|`972.27ns`|`221.07ns - 1.83μs`|
|map|`524288`|`24.82ns ± 328.03ps`|`37.22ns`|`17.93ns - 38.71ns`|`24.82ns ± 22.82ns`|`380.17ns`|`225.9ns - 476.76ns`|
|two map buckets|`524288`|`29.33ns ± 489.43ps`|`47.47ns`|`24.31ns - 59.22ns`|`29.33ns ± 25.81ns`|`1.14μs`|`222.76ns - 1.33μs`|
|two object buckets|`524288`|`108.67ns ± 1.56ns`|`190.83ns`|`89.71ns - 196.16ns`|`108.67ns ± 20.51ns`|`578.41ns`|`244.41ns - 846.44ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.92ns ± 781.6ps`|`76.47ns`|`35.82ns - 77.3ns`|`43.92ns ± 25.93ns`|`629.77ns`|`244.9ns - 922.51ns`|
|linked list map|`524288`|`94.74ns ± 1.81ns`|`159.4ns`|`77.94ns - 164.96ns`|`94.74ns ± 33.15ns`|`1.53μs`|`251.25ns - 2.61μs`|
|two object buckets|`524288`|`138.18ns ± 1.69ns`|`245.95ns`|`125.08ns - 251.24ns`|`138.18ns ± 18.99ns`|`704.05ns`|`246.81ns - 828.25ns`|
|map|`524288`|`833.98ns ± 15.7ns`|`1.92μs`|`636.89ns - 1.99μs`|`833.98ns ± 43.04ns`|`513.05ns`|`251.47ns - 898.54ns`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`86.47ns ± 1.3ns`|`145.33ns`|`74.69ns - 157.63ns`|`86.47ns ± 44.16ns`|`1.58μs`|`432.38ns - 1.8μs`|
|linked list map|`524288`|`165.25ns ± 4ns`|`333.19ns`|`122.78ns - 349.62ns`|`165.25ns ± 26.27ns`|`1.11μs`|`319.88ns - 1.39μs`|
|two object buckets|`524288`|`216.29ns ± 3.75ns`|`348.76ns`|`180.36ns - 354.93ns`|`216.29ns ± 25.76ns`|`822.47ns`|`392.18ns - 825.13ns`|
|map|`524288`|`5.7μs ± 245.21ns`|`9.93μs`|`1.63μs - 10.87μs`|`5.7μs ± 457.21ns`|`711.14ns`|`419.43ns - 711.62ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`22.89ns ± 384.1ps`|`39.26ns`|`14.23ns - 39.61ns`|`22.89ns ± 56.21ns`|`1.51μs`|`537.59ns - 1.58μs`|
|linked list map|`524288`|`44.55ns ± 423.2ps`|`64.54ns`|`33.85ns - 69.16ns`|`44.55ns ± 62.98ns`|`1.42μs`|`541.4ns - 1.54μs`|
|two object buckets|`524288`|`71.31ns ± 699.77ps`|`117.07ns`|`62.28ns - 127.7ns`|`71.31ns ± 49.05ns`|`1.18μs`|`466.35ns - 1.27μs`|
|map|`524288`|`75.68ns ± 1.13ns`|`120.53ns`|`66.14ns - 146.89ns`|`75.68ns ± 43.29ns`|`727.56ns`|`475.57ns - 734.9ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`38.5ns ± 541.87ps`|`65.74ns`|`29.11ns - 67.62ns`|`38.5ns ± 73.36ns`|`1.3μs`|`648.31ns - 1.82μs`|
|linked list map|`524288`|`44.45ns ± 246.71ps`|`54.31ns`|`41.57ns - 58.23ns`|`44.45ns ± 70.6ns`|`1.11μs`|`614.53ns - 1.15μs`|
|map|`524288`|`75.01ns ± 1.46ns`|`128.16ns`|`60.52ns - 133.97ns`|`75.01ns ± 71.13ns`|`1.25μs`|`677.59ns - 2.58μs`|
|two object buckets|`524288`|`200.56ns ± 1.5ns`|`291.26ns`|`175.71ns - 308.91ns`|`200.56ns ± 63.22ns`|`1.35μs`|`659.86ns - 1.65μs`|

