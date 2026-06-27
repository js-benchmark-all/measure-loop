# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`675.83ps ± 1.78ps`|`973.39ps`|`625.98ps - 7.38ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|polymorphic array|`524288`|`1.62ns ± 24.84ps`|`2.48ns`|`1.18ns - 2.71ns`|
|monomorphic object|`524288`|`1.78ns ± 85.29ps`|`6.19ns`|`1.49ns - 9.51ns`|
|monomorphic array|`524288`|`1.8ns ± 61.21ps`|`6.06ns`|`1.35ns - 6.15ns`|
|polymorphic object|`524288`|`2.11ns ± 39.36ps`|`2.79ns`|`1.97ns - 6.94ns`|
|megamorphic object|`524288`|`8.72ns ± 206.58ps`|`15.54ns`|`7.6ns - 15.96ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`2.44ns ± 90.41ps`|`8.41ns`|`1.93ns - 8.96ns`|
|monomorphic object|`524288`|`3.71ns ± 121.33ps`|`9.87ns`|`2.81ns - 9.97ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.32ns ± 80.7ps`|`12.28ns`|`9.01ns - 16.74ns`|
|WeakMap store|`524288`|`17.03ns ± 515.62ps`|`35.79ns`|`8.46ns - 38.37ns`|
|prototype chain (override prototype)|`524288`|`24.17ns ± 90.98ps`|`27.42ns`|`23.71ns - 29.26ns`|
|prototype chain (create with prototype)|`524288`|`24.19ns ± 70.87ps`|`26.81ns`|`23.87ns - 28.48ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|class with constructor|`1048576`|`3.91ns ± 99.73ps`|`10.54ns`|`3.51ns - 18.45ns`|
|function without constructor|`1048576`|`3.93ns ± 90.75ps`|`10.79ns`|`3.57ns - 17.7ns`|
|function constructor|`1048576`|`4.57ns ± 161.53ps`|`8.94ns`|`4.1ns - 34.84ns`|
|Object.create()|`1048576`|`5.37ns ± 223.48ps`|`11.33ns`|`4.72ns - 42.81ns`|
|class without constructor|`1048576`|`5.4ns ± 173.71ps`|`12.08ns`|`4.8ns - 35.9ns`|
|class with default initializer, without constructor|`1048576`|`5.44ns ± 196.55ps`|`10.02ns`|`4.78ns - 43.59ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`49.73ns ± 954.42ps`|`96.96ns`|`46.23ns - 149.73ns`|
|Object.create(null)|`524288`|`317.22ns ± 2.42ns`|`506.24ns`|`306.45ns - 537.77ns`|
|object literal|`524288`|`318.86ns ± 2.26ns`|`427.49ns`|`307.45ns - 568.27ns`|
|object literal (computed properties)|`524288`|`322.16ns ± 2.25ns`|`474.73ns`|`309.87ns - 493.71ns`|
|function constructor (freezed proto)|`524288`|`340.24ns ± 3.79ns`|`571.91ns`|`324.45ns - 670.96ns`|
|function constructor|`524288`|`346.02ns ± 4.59ns`|`572.47ns`|`322.75ns - 699.31ns`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Object.create()|`524288`|`973.06ps ± 14.18ps`|`1.17ns`|`946.53ps - 2.77ns`|
|function constructor|`524288`|`1.01ns ± 50.52ps`|`983.4ps`|`944.09ps - 7.45ns`|
|constructor|`524288`|`1.11ns ± 82.53ps`|`7.17ns`|`946.53ps - 7.25ns`|
|set __proto__|`524288`|`33.3ns ± 634.78ps`|`63.63ns`|`30.38ns - 63.86ns`|
|Object.setPrototypeOf()|`524288`|`40.1ns ± 244.01ps`|`46.14ns`|`38.49ns - 46.7ns`|
|object spread|`524288`|`161.72ns ± 1.05ns`|`210.53ns`|`154.64ns - 273.09ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`32.87ns ± 785.23ps`|`56.16ns`|`23.17ns - 58.73ns`|
|Set|`1048576`|`181.67ns ± 3.75ns`|`363.05ns`|`149.22ns - 639.56ns`|
|Set direct assign|`1048576`|`248.01ns ± 2.96ns`|`465.85ns`|`230.04ns - 576.27ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`31.88ns ± 731.82ps`|`55.49ns`|`23.2ns - 55.94ns`|
|Set|`1048576`|`128.94ns ± 3.06ns`|`300.41ns`|`96.69ns - 440.9ns`|
|Set direct assign|`1048576`|`205.38ns ± 4.05ns`|`345.78ns`|`170.75ns - 540.07ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`44.83ns ± 872.09ps`|`84.3ns`|`37.59ns - 89.17ns`|
|Set|`1048576`|`184.1ns ± 2.05ns`|`349.61ns`|`169.38ns - 355.77ns`|
|Set direct assign|`1048576`|`280.19ns ± 2.91ns`|`458.06ns`|`259.27ns - 583.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`42.64ns ± 746.96ps`|`81.02ns`|`36.77ns - 91.56ns`|
|Set|`1048576`|`116.08ns ± 415.24ps`|`126.62ns`|`110.48ns - 172.31ns`|
|Set direct assign|`1048576`|`193.32ns ± 1.55ns`|`349.2ns`|`183.96ns - 369.5ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`96.19ns ± 1.28ns`|`180.69ns`|`80.17ns - 184.23ns`|
|Set|`1048576`|`203.75ns ± 2.61ns`|`380.07ns`|`184.4ns - 444.55ns`|
|Set direct assign|`1048576`|`282.19ns ± 1.01ns`|`299.21ns`|`271.47ns - 516.32ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`91.18ns ± 745.69ps`|`103.07ns`|`83.03ns - 225.16ns`|
|Set|`1048576`|`125.29ns ± 1.48ns`|`190.23ns`|`116.75ns - 398.05ns`|
|Set direct assign|`1048576`|`194.88ns ± 1.12ns`|`246.59ns`|`186.99ns - 378.28ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`162.5ns ± 1.72ns`|`316.19ns`|`146.72ns - 321.4ns`|
|Set|`1048576`|`336.02ns ± 4.89ns`|`640.28ns`|`298.92ns - 647.82ns`|
|Set direct assign|`1048576`|`394.54ns ± 427.92ps`|`415.65ns`|`380.68ns - 432.65ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`185.88ns ± 3.92ns`|`337.19ns`|`149.46ns - 527.6ns`|
|Set|`1048576`|`210.79ns ± 2.23ns`|`394.54ns`|`193.76ns - 396.69ns`|
|Set direct assign|`1048576`|`278.16ns ± 1.77ns`|`346.96ns`|`266.71ns - 537.21ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`83.43ns ± 2.46ns`|`155.11ns`|`69.05ns - 155.83ns`|
|Set|`524288`|`272.15ns ± 4.77ns`|`516.18ns`|`254.43ns - 516.22ns`|
|Set direct assign|`524288`|`437.04ns ± 4.36ns`|`814.55ns`|`419.86ns - 821.62ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`72.07ns ± 1.38ns`|`148.52ns`|`66.68ns - 148.86ns`|
|Set|`524288`|`213.24ns ± 4.53ns`|`385.21ns`|`191.49ns - 466.78ns`|
|Set direct assign|`524288`|`351.68ns ± 776.25ps`|`403.3ns`|`345.18ns - 412.77ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`152.92ns ± 4.29ns`|`306.13ns`|`131.73ns - 308.87ns`|
|Set|`524288`|`296.92ns ± 6.72ns`|`535.26ns`|`267.34ns - 610.42ns`|
|Set direct assign|`524288`|`439.51ns ± 5.68ns`|`831.59ns`|`415.31ns - 849.3ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`140.05ns ± 372.09ps`|`154.72ns`|`134.55ns - 164.75ns`|
|Set|`524288`|`201.26ns ± 2.29ns`|`365.7ns`|`190.75ns - 365.83ns`|
|Set direct assign|`524288`|`340.78ns ± 1.86ns`|`449.49ns`|`331.72ns - 516.11ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`296.92ns ± 9.08ns`|`569.34ns`|`248.8ns - 585.28ns`|
|Set|`524288`|`401.42ns ± 6.96ns`|`790.19ns`|`370.71ns - 791.88ns`|
|Set direct assign|`524288`|`536.99ns ± 912.55ps`|`575.93ns`|`524.86ns - 596.08ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`272.95ns ± 4.28ns`|`554.83ns`|`258.21ns - 558.17ns`|
|Set|`524288`|`289.35ns ± 4.2ns`|`523.58ns`|`270.95ns - 531.08ns`|
|Set direct assign|`524288`|`423.07ns ± 3.3ns`|`509.67ns`|`407.68ns - 823.5ns`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`463.89ns ± 11.09ns`|`950.75ns`|`418.66ns - 958.19ns`|
|Set|`524288`|`550.02ns ± 1.15ns`|`603.52ns`|`530.67ns - 605.95ns`|
|Set direct assign|`524288`|`706.33ns ± 5.96ns`|`851.46ns`|`671.79ns - 1.41μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`331.9ns ± 5.53ns`|`619.77ns`|`312.14ns - 620.44ns`|
|Array.includes()|`524288`|`444.51ns ± 8.74ns`|`936.14ns`|`415.4ns - 961.28ns`|
|Set direct assign|`524288`|`454.45ns ± 626.84ps`|`490.78ns`|`445.11ns - 491.09ns`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`131072`|`893.71ns ± 31.27ns`|`1.84μs`|`837.88ns - 1.84μs`|
|Set|`131072`|`905.04ns ± 35.36ns`|`1.69μs`|`838.01ns - 1.69μs`|
|Set direct assign|`131072`|`1.42μs ± 4.76ns`|`1.52μs`|`1.39μs - 1.52μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`760.83ns ± 22.72ns`|`1.48μs`|`729.53ns - 1.48μs`|
|Array.includes()|`131072`|`843.2ns ± 1.26ns`|`865.96ns`|`832.15ns - 865.96ns`|
|Set direct assign|`131072`|`1.28μs ± 1.16ns`|`1.3μs`|`1.27μs - 1.3μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.01μs ± 1.56ns`|`1.05μs`|`1.01μs - 1.05μs`|
|Array.includes()|`131072`|`1.5μs ± 9.63ns`|`1.79μs`|`1.47μs - 1.79μs`|
|Set direct assign|`131072`|`1.57μs ± 3.54ns`|`1.65μs`|`1.56μs - 1.65μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`800.56ns ± 1.71ns`|`832.75ns`|`791.67ns - 832.75ns`|
|Set direct assign|`131072`|`1.35μs ± 3.92ns`|`1.46μs`|`1.33μs - 1.46μs`|
|Array.includes()|`131072`|`1.53μs ± 51.73ns`|`3.11μs`|`1.44μs - 3.11μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.64μs ± 3.39ns`|`1.71μs`|`1.61μs - 1.71μs`|
|Set direct assign|`131072`|`2.26μs ± 4.61ns`|`2.35μs`|`2.22μs - 2.35μs`|
|Array.includes()|`131072`|`3.25μs ± 67.72ns`|`5.38μs`|`3.14μs - 5.38μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.29μs ± 29.96ns`|`2.22μs`|`1.23μs - 2.22μs`|
|Set direct assign|`131072`|`1.79μs ± 4.62ns`|`1.87μs`|`1.74μs - 1.87μs`|
|Array.includes()|`131072`|`3.26μs ± 107ns`|`6.63μs`|`3.11μs - 6.63μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`2.29μs ± 7.55ns`|`2.45μs`|`2.25μs - 2.45μs`|
|Set direct assign|`131072`|`2.86μs ± 4.93ns`|`2.94μs`|`2.82μs - 2.94μs`|
|Array.includes()|`131072`|`6.37μs ± 8.44ns`|`6.51μs`|`6.33μs - 6.51μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.35μs ± 3.96ns`|`1.39μs`|`1.31μs - 1.39μs`|
|Set direct assign|`131072`|`2.01μs ± 30.34ns`|`2.95μs`|`1.9μs - 2.95μs`|
|Array.includes()|`131072`|`6.15μs ± 11.33ns`|`6.43μs`|`6.1μs - 6.43μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`53.07ns ± 586.56ps`|`81.75ns`|`50.02ns - 111.63ns`|
|await non-promise|`524288`|`164.16ns ± 1.92ns`|`297.81ns`|`153.66ns - 338.69ns`|
|await promise|`524288`|`171.59ns ± 2.52ns`|`305.63ns`|`158.17ns - 366.39ns`|
|async generator|`524288`|`895.23ns ± 9.31ns`|`1.48μs`|`857.19ns - 1.5μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.24μs ± 17.48ns`|`1.79μs`|`1.21μs - 1.79μs`|
|generator|`131072`|`2.51μs ± 3.94ns`|`2.58μs`|`2.48μs - 2.58μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`90.01ns ± 2.43ns`|`203.63ns`|`77.59ns - 254.73ns`|`90.01ns ± 11.25ns`|`361.81ns`|`183.68ns - 447.49ns`|
|map|`524288`|`149.26ns ± 1.89ns`|`219.93ns`|`134.43ns - 357.71ns`|`149.26ns ± 7.1ns`|`457.01ns`|`182.17ns - 535.66ns`|
|linked list map|`524288`|`152.54ns ± 3.97ns`|`346.54ns`|`123.96ns - 364.89ns`|`152.54ns ± 7.09ns`|`401.99ns`|`184.45ns - 483.61ns`|
|two object buckets|`524288`|`319.36ns ± 4.76ns`|`568ns`|`296.37ns - 598.92ns`|`319.36ns ± 9.37ns`|`538.17ns`|`204.33ns - 976.84ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`11.93ns ± 188.14ps`|`18.37ns`|`8.79ns - 19.11ns`|`11.93ns ± 17.26ns`|`326.53ns`|`181.84ns - 404.52ns`|
|linked list map|`524288`|`12.53ns ± 285.76ps`|`21.39ns`|`5.97ns - 24.54ns`|`12.53ns ± 599.72ns`|`16.82μs`|`177.57ns - 17.01μs`|
|two map buckets|`524288`|`21.01ns ± 315.6ps`|`33.18ns`|`15.71ns - 37.11ns`|`21.01ns ± 20.72ns`|`822.68ns`|`177.95ns - 1.08μs`|
|two object buckets|`524288`|`104.57ns ± 1.25ns`|`173.26ns`|`94.21ns - 174.08ns`|`104.57ns ± 21.73ns`|`662.48ns`|`178.68ns - 2.47μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`47.57ns ± 1.28ns`|`87.21ns`|`38.21ns - 161.84ns`|`47.57ns ± 17.26ns`|`490ns`|`179.57ns - 1.29μs`|
|linked list map|`524288`|`96.39ns ± 1.92ns`|`169.45ns`|`85.01ns - 201.5ns`|`96.39ns ± 12.82ns`|`676.12ns`|`185.23ns - 709.2ns`|
|map|`524288`|`101.83ns ± 2.42ns`|`186ns`|`92.49ns - 381.44ns`|`101.83ns ± 11.15ns`|`430.96ns`|`185.44ns - 560.67ns`|
|two object buckets|`524288`|`237.31ns ± 2.79ns`|`410.15ns`|`222.58ns - 415.38ns`|`237.31ns ± 4.68ns`|`519.95ns`|`198.65ns - 699.38ns`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`86.95ns ± 2.12ns`|`173.51ns`|`71.48ns - 214.37ns`|`86.95ns ± 12.36ns`|`400.46ns`|`189.83ns - 486.9ns`|
|linked list map|`524288`|`139.87ns ± 5.43ns`|`433.23ns`|`114.17ns - 632.06ns`|`139.87ns ± 8.73ns`|`423.5ns`|`193.63ns - 565.69ns`|
|map|`524288`|`196.83ns ± 4.87ns`|`498.74ns`|`177.97ns - 522.8ns`|`196.83ns ± 10.92ns`|`505.81ns`|`194.49ns - 1.5μs`|
|two object buckets|`524288`|`306.99ns ± 1.97ns`|`440.13ns`|`282.45ns - 460.99ns`|`306.99ns ± 10.1ns`|`380.89ns`|`215.9ns - 1.33μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`13.3ns ± 277.79ps`|`28.43ns`|`7.64ns - 36.21ns`|`13.3ns ± 18.76ns`|`424.42ns`|`178.68ns - 775.71ns`|
|linked list map|`524288`|`16.03ns ± 314.24ps`|`26.55ns`|`10.72ns - 27.71ns`|`16.03ns ± 24.08ns`|`380.51ns`|`187.42ns - 1.96μs`|
|two map buckets|`524288`|`27.84ns ± 303.27ps`|`41.14ns`|`22.69ns - 43.37ns`|`27.84ns ± 18.17ns`|`406.96ns`|`183.54ns - 678.78ns`|
|two object buckets|`524288`|`114.53ns ± 1.42ns`|`183.29ns`|`102.3ns - 187.13ns`|`114.53ns ± 11.89ns`|`554.94ns`|`195.03ns - 647.13ns`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`43.17ns ± 1.07ns`|`72.69ns`|`38.3ns - 146.94ns`|`43.17ns ± 18.12ns`|`624.11ns`|`186.89ns - 879.84ns`|
|linked list map|`524288`|`84.29ns ± 1.01ns`|`135.73ns`|`77.62ns - 177.55ns`|`84.29ns ± 14.06ns`|`513.09ns`|`190.67ns - 536.8ns`|
|map|`524288`|`157.18ns ± 3.92ns`|`383.45ns`|`139.77ns - 457.55ns`|`157.18ns ± 12.38ns`|`749.24ns`|`190.11ns - 1.36μs`|
|two object buckets|`524288`|`227.01ns ± 2.46ns`|`381.6ns`|`196.26ns - 388.93ns`|`227.01ns ± 4.2ns`|`444.18ns`|`207.62ns - 467.84ns`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`88.07ns ± 2.24ns`|`172.05ns`|`73.86ns - 251.94ns`|`88.07ns ± 18.11ns`|`543.01ns`|`211.9ns - 1.05μs`|
|linked list map|`524288`|`146.19ns ± 3.47ns`|`290.25ns`|`118.31ns - 293.69ns`|`146.19ns ± 16.85ns`|`874.92ns`|`221.41ns - 913.54ns`|
|two object buckets|`524288`|`249.01ns ± 2.79ns`|`404.51ns`|`228.26ns - 417.2ns`|`249.01ns ± 2.94ns`|`352.95ns`|`214.97ns - 369.78ns`|
|map|`524288`|`676.55ns ± 12.73ns`|`1.42μs`|`548.3ns - 1.44μs`|`676.55ns ± 36.17ns`|`690.07ns`|`215.34ns - 819.66ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`21.52ns ± 406.31ps`|`34.83ns`|`15.14ns - 36.9ns`|`21.52ns ± 33.79ns`|`1.04μs`|`217.77ns - 2.75μs`|
|map|`524288`|`26.15ns ± 370.28ps`|`36.78ns`|`17.92ns - 42.67ns`|`26.15ns ± 28.59ns`|`1.05μs`|`229.51ns - 1.23μs`|
|two map buckets|`524288`|`29.32ns ± 510.42ps`|`54.07ns`|`23.56ns - 55.78ns`|`29.32ns ± 27.88ns`|`961.59ns`|`230.88ns - 1.4μs`|
|two object buckets|`524288`|`110.81ns ± 881.09ps`|`129.43ns`|`91.17ns - 184.72ns`|`110.81ns ± 27.01ns`|`969.86ns`|`238.02ns - 2.5μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`46.11ns ± 1.2ns`|`72.9ns`|`37ns - 185.82ns`|`46.11ns ± 28.8ns`|`696.91ns`|`258.06ns - 1μs`|
|linked list map|`524288`|`101.65ns ± 2.21ns`|`204.89ns`|`79.37ns - 245.89ns`|`101.65ns ± 34.15ns`|`1.81μs`|`268.56ns - 2.18μs`|
|two object buckets|`524288`|`140.51ns ± 1.72ns`|`249.46ns`|`121.92ns - 250.17ns`|`140.51ns ± 19.45ns`|`564.95ns`|`266.26ns - 600.45ns`|
|map|`524288`|`622.13ns ± 8.71ns`|`1.06μs`|`531.34ns - 1.29μs`|`622.13ns ± 23.96ns`|`1.04μs`|`268.69ns - 1.06μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`87.79ns ± 1.33ns`|`144.9ns`|`74.53ns - 148.22ns`|`87.79ns ± 34.98ns`|`698.61ns`|`383.04ns - 746.07ns`|
|linked list map|`524288`|`183.9ns ± 6.33ns`|`341.84ns`|`122ns - 432.75ns`|`183.9ns ± 29.6ns`|`1.48μs`|`325.38ns - 1.87μs`|
|two object buckets|`524288`|`239.08ns ± 4.87ns`|`445.56ns`|`189.66ns - 471.91ns`|`239.08ns ± 37.28ns`|`971.02ns`|`508.26ns - 1.7μs`|
|map|`524288`|`4.22μs ± 179.25ns`|`6.9μs`|`1.4μs - 8.88μs`|`4.22μs ± 318.79ns`|`840.88ns`|`467.35ns - 846.4ns`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`25.36ns ± 423.82ps`|`47.39ns`|`18.34ns - 54.3ns`|`25.36ns ± 64.17ns`|`1.1μs`|`575.8ns - 2.24μs`|
|linked list map|`524288`|`47.38ns ± 1.01ns`|`76.88ns`|`35.15ns - 153.18ns`|`47.38ns ± 59.35ns`|`1.39μs`|`517.71ns - 1.87μs`|
|two object buckets|`524288`|`72.72ns ± 789.29ps`|`121.12ns`|`62.98ns - 122.3ns`|`72.72ns ± 48.15ns`|`1.08μs`|`472.48ns - 1.13μs`|
|map|`524288`|`84.67ns ± 2.02ns`|`187.73ns`|`67.98ns - 209.49ns`|`84.67ns ± 53.23ns`|`1.03μs`|`558.9ns - 1.06μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`37.29ns ± 567.64ps`|`66.62ns`|`29.22ns - 69.26ns`|`37.29ns ± 73.54ns`|`1.23μs`|`611.25ns - 1.66μs`|
|linked list map|`524288`|`53.65ns ± 766.03ps`|`74.72ns`|`43.61ns - 111.48ns`|`53.65ns ± 82.55ns`|`1.28μs`|`715.13ns - 1.41μs`|
|map|`524288`|`79.55ns ± 1.81ns`|`157.83ns`|`61.94ns - 169.11ns`|`79.55ns ± 75.34ns`|`1.39μs`|`696.27ns - 1.46μs`|
|two object buckets|`524288`|`225.41ns ± 3.45ns`|`387.94ns`|`178.5ns - 448.79ns`|`225.41ns ± 75.85ns`|`1.47μs`|`743.35ns - 1.72μs`|

