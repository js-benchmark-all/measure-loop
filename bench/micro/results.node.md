# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`468.57ps ± 15.35ps`|`367.68ps`|`331.3ps - 34.72ns`|
# string
## filter
### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`36.79ns ± 456.65ps`|`62.07ns`|`22.97ns - 63.51ns`|
|regex|`524288`|`104.22ns ± 532.46ps`|`118.94ns`|`76.32ns - 119.63ns`|
|fp|`524288`|`307.65ns ± 5.1ns`|`467.56ns`|`228.22ns - 512.57ns`|
### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`178.81ns ± 2.39ns`|`252.99ns`|`118.26ns - 253.9ns`|
|fp & procedural filter|`524288`|`341.68ns ± 5.29ns`|`522.87ns`|`251.36ns - 581.61ns`|
|fp|`524288`|`500.66ns ± 7.55ns`|`644.08ns`|`395.88ns - 750.24ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`2.97ns ± 404.91ps`|`26.31ns`|`1.71ns - 35.81ns`|
|polymorphic array|`524288`|`3.94ns ± 455.94ps`|`27.41ns`|`1.66ns - 30.96ns`|
|polymorphic object|`524288`|`5.12ns ± 473.98ps`|`30.8ns`|`2.58ns - 35.75ns`|
|monomorphic array|`524288`|`8.08ns ± 862.64ps`|`32.67ns`|`1.37ns - 34.31ns`|
|megamorphic object|`524288`|`21.93ns ± 427.17ps`|`46.8ns`|`12.47ns - 53.47ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.22ns ± 476.63ps`|`24.99ns`|`4.02ns - 31.19ns`|
|monomorphic object|`524288`|`11.59ns ± 418.7ps`|`31.76ns`|`8.09ns - 33.78ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.09ns ± 371.99ps`|`27.29ns`|`5.29ns - 48.53ns`|
|prototype chain (override prototype)|`524288`|`10.53ns ± 182.32ps`|`13.97ns`|`7.04ns - 31.37ns`|
|prototype chain (create with prototype)|`524288`|`11.63ns ± 266.88ps`|`15.23ns`|`7.39ns - 41.23ns`|
|WeakMap store|`524288`|`13.53ns ± 384.16ps`|`22.7ns`|`6.34ns - 35.77ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`165.5ns ± 2.83ns`|`246.18ns`|`128.73ns - 249.79ns`|
|Object.create(null)|`524288`|`296.43ns ± 3.58ns`|`349.46ns`|`239.3ns - 350.83ns`|
|object literal (computed properties)|`524288`|`893.86ns ± 3.59ns`|`1.02μs`|`836.7ns - 1.02μs`|
|function constructor (freezed proto)|`524288`|`899.65ns ± 3.55ns`|`1.03μs`|`844.08ns - 1.04μs`|
|function constructor|`524288`|`922.83ns ± 3.99ns`|`1.06μs`|`860.78ns - 1.09μs`|
|object literal|`524288`|`952.19ns ± 4.43ns`|`1.08μs`|`887.93ns - 1.08μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`8.19ns ± 1.58ns`|`75.12ns`|`2.3ns - 166.75ns`|
|function constructor|`524288`|`11.7ns ± 1.08ns`|`59.67ns`|`2.54ns - 130.14ns`|
|set prototype|`524288`|`19.35ns ± 1.32ns`|`114.65ns`|`2.55ns - 130.4ns`|
|Object.create()|`524288`|`39.64ns ± 2.02ns`|`133.81ns`|`2.83ns - 136.09ns`|
|Object.setPrototypeOf()|`524288`|`194.73ns ± 3.35ns`|`368.78ns`|`157.06ns - 375.83ns`|
|set __proto__|`524288`|`217.38ns ± 4.52ns`|`361.58ns`|`157.04ns - 378.35ns`|
|object spread|`524288`|`528.92ns ± 4.79ns`|`753.07ns`|`480.06ns - 755.05ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`67.05ns ± 582.69ps`|`84.04ns`|`51.59ns - 91.22ns`|
|Set direct assign|`1048576`|`169.67ns ± 1.39ns`|`260.11ns`|`135.99ns - 266.14ns`|
|Set|`1048576`|`172.44ns ± 1.32ns`|`235.68ns`|`145.61ns - 247.16ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`68.96ns ± 267.84ps`|`81.28ns`|`41.19ns - 85.42ns`|
|Set|`1048576`|`89.76ns ± 327.6ps`|`103.37ns`|`78.61ns - 107.85ns`|
|Set direct assign|`1048576`|`114.72ns ± 858.75ps`|`146.01ns`|`77.81ns - 152.89ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`98.8ns ± 369.27ps`|`111.22ns`|`63.9ns - 116.13ns`|
|Set direct assign|`1048576`|`185.58ns ± 1.06ns`|`272.77ns`|`161.39ns - 278.78ns`|
|Set|`1048576`|`201.9ns ± 1.59ns`|`276.41ns`|`161.3ns - 323.97ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`99.17ns ± 273.34ps`|`108.99ns`|`87.16ns - 122.65ns`|
|Set direct assign|`1048576`|`116.54ns ± 782.14ps`|`151.66ns`|`78.69ns - 163.54ns`|
|Array.includes()|`1048576`|`138.95ns ± 1.07ns`|`180.11ns`|`114.86ns - 189.7ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`204.78ns ± 1.14ns`|`296.12ns`|`184.7ns - 309.65ns`|
|Set|`1048576`|`234.11ns ± 2.46ns`|`333.95ns`|`184.76ns - 339.2ns`|
|Set direct assign|`1048576`|`243.43ns ± 2.62ns`|`336.31ns`|`179.74ns - 338.78ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`107.36ns ± 496.98ps`|`134.24ns`|`93.25ns - 141.89ns`|
|Set direct assign|`1048576`|`116.45ns ± 574.51ps`|`155.1ns`|`86.23ns - 159.1ns`|
|Array.includes()|`1048576`|`242.78ns ± 2.74ns`|`318.62ns`|`190.78ns - 333.49ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`297.84ns ± 605.39ps`|`319.19ns`|`276.19ns - 329.54ns`|
|Set direct assign|`1048576`|`312.25ns ± 2.87ns`|`392.91ns`|`261.96ns - 401.38ns`|
|Array.includes()|`1048576`|`427.26ns ± 5.34ns`|`609.45ns`|`328.72ns - 628.76ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`127.84ns ± 366.96ps`|`142.44ns`|`92.46ns - 145.86ns`|
|Set|`1048576`|`186.44ns ± 2.06ns`|`253.09ns`|`129.93ns - 260.67ns`|
|Array.includes()|`1048576`|`404.39ns ± 4.41ns`|`601.05ns`|`336.55ns - 608.7ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`147.22ns ± 904.6ps`|`190.75ns`|`131.69ns - 195.33ns`|
|Set|`524288`|`246.7ns ± 4.14ns`|`353.99ns`|`194.05ns - 357.42ns`|
|Set direct assign|`524288`|`253.88ns ± 3.71ns`|`362.86ns`|`208.52ns - 368.78ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`142.49ns ± 1.8ns`|`209.62ns`|`99ns - 212.9ns`|
|Set direct assign|`524288`|`165.7ns ± 2.17ns`|`236.86ns`|`141.22ns - 237.37ns`|
|Array.includes()|`524288`|`218.9ns ± 756.23ps`|`235.69ns`|`194.13ns - 236.91ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`268.24ns ± 2.23ns`|`379.38ns`|`230.76ns - 381.21ns`|
|Set direct assign|`524288`|`310ns ± 4.33ns`|`386.58ns`|`257.43ns - 398.67ns`|
|Array.includes()|`524288`|`481.56ns ± 8.67ns`|`692.32ns`|`401.1ns - 910.99ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`154.68ns ± 1.78ns`|`214.92ns`|`120.6ns - 225.45ns`|
|Set direct assign|`524288`|`165.19ns ± 1.93ns`|`252.73ns`|`143.53ns - 256.26ns`|
|Array.includes()|`524288`|`478.58ns ± 8.08ns`|`687.83ns`|`395.76ns - 689.45ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`374.67ns ± 4.5ns`|`448.48ns`|`311.75ns - 449.59ns`|
|Set|`524288`|`382.49ns ± 6.42ns`|`615.03ns`|`336.4ns - 618.76ns`|
|Array.includes()|`524288`|`889.83ns ± 12.26ns`|`1.09μs`|`752.5ns - 1.09μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`210.94ns ± 2.74ns`|`278.98ns`|`146.92ns - 280.86ns`|
|Set|`524288`|`225.37ns ± 3.37ns`|`333.27ns`|`181.01ns - 334.78ns`|
|Array.includes()|`524288`|`896.25ns ± 12.59ns`|`1.1μs`|`742.01ns - 1.11μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`660.71ns ± 4.97ns`|`763.08ns`|`550.82ns - 775.03ns`|
|Set|`524288`|`814.28ns ± 6.86ns`|`943.9ns`|`679.32ns - 959.02ns`|
|Array.includes()|`524288`|`869.28ns ± 12.25ns`|`1.04μs`|`698.37ns - 1.04μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`332.61ns ± 3.66ns`|`404.78ns`|`282.02ns - 407.83ns`|
|Set|`524288`|`359.99ns ± 5.86ns`|`495.8ns`|`265.46ns - 496.12ns`|
|Array.includes()|`524288`|`847.49ns ± 12.61ns`|`1.05μs`|`684.84ns - 1.05μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`665.76ns ± 9.93ns`|`751.6ns`|`595.51ns - 751.6ns`|
|Set|`131072`|`677.23ns ± 16.33ns`|`861.25ns`|`592.71ns - 861.25ns`|
|Array.includes()|`131072`|`2.99μs ± 25.35ns`|`3.21μs`|`2.79μs - 3.21μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`509.46ns ± 12.76ns`|`673.41ns`|`452.17ns - 673.41ns`|
|Set direct assign|`131072`|`522.87ns ± 7.06ns`|`602.4ns`|`483.16ns - 602.4ns`|
|Array.includes()|`131072`|`2.91μs ± 19.95ns`|`3.23μs`|`2.81μs - 3.23μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`918.89ns ± 6.43ns`|`1.04μs`|`881.1ns - 1.04μs`|
|Set|`131072`|`973.8ns ± 13.95ns`|`1.16μs`|`869.68ns - 1.16μs`|
|Array.includes()|`131072`|`1.41μs ± 19.97ns`|`1.65μs`|`1.3μs - 1.65μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`621.55ns ± 6.24ns`|`708.51ns`|`567.56ns - 708.51ns`|
|Set|`131072`|`625.58ns ± 12ns`|`758.9ns`|`564.43ns - 758.9ns`|
|Array.includes()|`131072`|`3.28μs ± 26.42ns`|`3.59μs`|`3.13μs - 3.59μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.36μs ± 7.68ns`|`1.45μs`|`1.3μs - 1.45μs`|
|Set|`131072`|`1.38μs ± 15.54ns`|`1.52μs`|`1.27μs - 1.52μs`|
|Array.includes()|`131072`|`4.63μs ± 28.26ns`|`4.84μs`|`4.4μs - 4.84μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`826.98ns ± 6.83ns`|`931.75ns`|`778.41ns - 931.75ns`|
|Set|`131072`|`850.72ns ± 11.92ns`|`1.05μs`|`776.05ns - 1.05μs`|
|Array.includes()|`131072`|`4.61μs ± 28.36ns`|`4.89μs`|`4.35μs - 4.89μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.1μs ± 8.59ns`|`2.19μs`|`2.01μs - 2.19μs`|
|Set|`131072`|`2.1μs ± 14.67ns`|`2.25μs`|`2μs - 2.25μs`|
|Array.includes()|`131072`|`13.75μs ± 34.99ns`|`14.14μs`|`13.43μs - 14.14μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.18μs ± 8.58ns`|`1.28μs`|`1.11μs - 1.28μs`|
|Set|`131072`|`1.23μs ± 13.41ns`|`1.38μs`|`1.14μs - 1.38μs`|
|Array.includes()|`131072`|`13.69μs ± 26.91ns`|`14.01μs`|`13.4μs - 14.01μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`110.09ns ± 921.1ps`|`138.77ns`|`74.52ns - 149.49ns`|
|await promise|`524288`|`131.76ns ± 626.39ps`|`162.7ns`|`117.15ns - 169.72ns`|
|await non-promise|`524288`|`150.19ns ± 886.36ps`|`184.02ns`|`100.7ns - 186.05ns`|
|async generator|`524288`|`885.03ns ± 4.82ns`|`997.45ns`|`760.75ns - 1.09μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.13μs ± 16.86ns`|`1.39μs`|`1.02μs - 1.39μs`|
|generator|`131072`|`1.78μs ± 5.48ns`|`1.87μs`|`1.72μs - 1.87μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`185.19ns ± 1.97ns`|`231.38ns`|`139.48ns - 234.9ns`|`185.19ns ± 86.14ns`|`1.25μs`|`1.05μs - 1.43μs`|
|map|`524288`|`248.67ns ± 4.11ns`|`393.36ns`|`181.53ns - 395.21ns`|`248.67ns ± 78.58ns`|`1.24μs`|`1.03μs - 1.25μs`|
|linked list map|`524288`|`260.37ns ± 3.59ns`|`420.24ns`|`189.53ns - 435.8ns`|`260.37ns ± 79.99ns`|`1.28μs`|`1.07μs - 1.3μs`|
|two object buckets|`524288`|`297.24ns ± 3.74ns`|`498.4ns`|`249.9ns - 502.43ns`|`297.24ns ± 74.39ns`|`1.21μs`|`1.02μs - 1.24μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.3ns ± 638.08ps`|`62.73ns`|`16.79ns - 65.67ns`|`27.3ns ± 110.36ns`|`1.42μs`|`1.17μs - 1.43μs`|
|linked list map|`524288`|`31.65ns ± 524.48ps`|`61.07ns`|`21.5ns - 63.35ns`|`31.65ns ± 110.23ns`|`1.43μs`|`1.17μs - 1.43μs`|
|two map buckets|`524288`|`38.56ns ± 461.88ps`|`66.23ns`|`25.02ns - 66.59ns`|`38.56ns ± 101.61ns`|`1.33μs`|`1.1μs - 1.38μs`|
|two object buckets|`524288`|`51.34ns ± 662.59ps`|`90.56ns`|`40.33ns - 94.74ns`|`51.34ns ± 101.55ns`|`1.32μs`|`1.11μs - 1.71μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`59.43ns ± 427.32ps`|`91.31ns`|`54.89ns - 95.89ns`|`59.43ns ± 99.86ns`|`1.34μs`|`1.08μs - 1.59μs`|
|two object buckets|`524288`|`101.41ns ± 454.74ps`|`113.37ns`|`66.89ns - 122.06ns`|`101.41ns ± 93.25ns`|`1.32μs`|`1.06μs - 1.33μs`|
|map|`524288`|`113.44ns ± 1.16ns`|`148.21ns`|`93.08ns - 154.59ns`|`113.44ns ± 95.74ns`|`1.31μs`|`1.1μs - 1.43μs`|
|linked list map|`524288`|`129.66ns ± 475.04ps`|`144.07ns`|`118.16ns - 158.4ns`|`129.66ns ± 95.28ns`|`1.32μs`|`1.11μs - 1.33μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`186.07ns ± 2.28ns`|`246.49ns`|`142.2ns - 290.78ns`|`186.07ns ± 85.82ns`|`1.26μs`|`1.07μs - 1.58μs`|
|map|`524288`|`229.38ns ± 1.03ns`|`262.58ns`|`188.41ns - 273.62ns`|`229.38ns ± 81.22ns`|`1.27μs`|`1.03μs - 1.27μs`|
|linked list map|`524288`|`238.55ns ± 991.78ps`|`261.87ns`|`216.77ns - 308.28ns`|`238.55ns ± 81.39ns`|`1.24μs`|`1.07μs - 1.25μs`|
|two object buckets|`524288`|`272.83ns ± 2.34ns`|`417.47ns`|`229.54ns - 418.66ns`|`272.83ns ± 78.22ns`|`1.39μs`|`1.04μs - 1.66μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`30.17ns ± 483.99ps`|`63.8ns`|`24.16ns - 66.18ns`|`30.17ns ± 107.4ns`|`1.43μs`|`1.16μs - 1.59μs`|
|linked list map|`524288`|`34.55ns ± 398.67ps`|`63.86ns`|`29.38ns - 69.91ns`|`34.55ns ± 111ns`|`1.59μs`|`1.15μs - 1.62μs`|
|two map buckets|`524288`|`50.5ns ± 638.68ps`|`84.29ns`|`32.53ns - 84.95ns`|`50.5ns ± 99.18ns`|`1.31μs`|`1.08μs - 1.33μs`|
|two object buckets|`524288`|`57.19ns ± 574.77ps`|`94.68ns`|`40.01ns - 96.78ns`|`57.19ns ± 100.5ns`|`1.28μs`|`1.04μs - 1.41μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.5ns ± 435.76ps`|`98.39ns`|`60.73ns - 101.83ns`|`65.5ns ± 98.56ns`|`1.39μs`|`1.08μs - 1.4μs`|
|two object buckets|`524288`|`96.39ns ± 344.75ps`|`106.81ns`|`88.57ns - 121.6ns`|`96.39ns ± 94.22ns`|`1.31μs`|`1.04μs - 1.41μs`|
|map|`524288`|`128.97ns ± 914.99ps`|`165.37ns`|`98.7ns - 176.11ns`|`128.97ns ± 90.39ns`|`1.26μs`|`1.05μs - 1.43μs`|
|linked list map|`524288`|`129.79ns ± 416.87ps`|`146.98ns`|`119.83ns - 151.48ns`|`129.79ns ± 93.51ns`|`1.29μs`|`1.09μs - 1.32μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`181.84ns ± 1.38ns`|`217.62ns`|`140.73ns - 287.81ns`|`181.84ns ± 87.77ns`|`1.27μs`|`1.09μs - 1.42μs`|
|linked list map|`524288`|`249.07ns ± 1.5ns`|`326.94ns`|`214.12ns - 330.06ns`|`249.07ns ± 82.39ns`|`1.3μs`|`1.06μs - 1.3μs`|
|two object buckets|`524288`|`306.57ns ± 5.11ns`|`459.82ns`|`235.81ns - 461.16ns`|`306.57ns ± 75.91ns`|`1.32μs`|`1.05μs - 1.42μs`|
|map|`524288`|`387.04ns ± 2.71ns`|`502.53ns`|`351.11ns - 644.32ns`|`387.04ns ± 69.03ns`|`1.28μs`|`1.07μs - 1.3μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`39.94ns ± 380.97ps`|`67.69ns`|`35.49ns - 72.65ns`|`39.94ns ± 109.37ns`|`1.42μs`|`1.15μs - 1.43μs`|
|map|`524288`|`40.5ns ± 510.95ps`|`81.08ns`|`29.31ns - 83.89ns`|`40.5ns ± 111.13ns`|`1.41μs`|`1.19μs - 1.41μs`|
|two map buckets|`524288`|`60.84ns ± 267.16ps`|`68.47ns`|`54.72ns - 69.44ns`|`60.84ns ± 104.58ns`|`1.34μs`|`1.11μs - 1.42μs`|
|two object buckets|`524288`|`67.8ns ± 474.45ps`|`99.16ns`|`59.69ns - 107.38ns`|`67.8ns ± 103ns`|`1.34μs`|`1.14μs - 1.37μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`63.89ns ± 379.73ps`|`91.49ns`|`59.34ns - 95.93ns`|`63.89ns ± 106.93ns`|`1.42μs`|`1.18μs - 1.51μs`|
|two object buckets|`524288`|`93.48ns ± 364.03ps`|`116.25ns`|`88.07ns - 123.23ns`|`93.48ns ± 100.95ns`|`1.41μs`|`1.13μs - 1.52μs`|
|linked list map|`524288`|`134.9ns ± 518.88ps`|`158.48ns`|`122.65ns - 172.01ns`|`134.9ns ± 99.34ns`|`1.39μs`|`1.17μs - 1.39μs`|
|map|`524288`|`280.21ns ± 3.64ns`|`445.05ns`|`237.82ns - 452.83ns`|`280.21ns ± 82.85ns`|`1.33μs`|`1.1μs - 1.41μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`220.05ns ± 3.95ns`|`341.59ns`|`181.19ns - 352.5ns`|`220.05ns ± 93.71ns`|`1.52μs`|`1.16μs - 1.57μs`|
|linked list map|`524288`|`320.13ns ± 4.66ns`|`439.99ns`|`267.11ns - 442.91ns`|`320.13ns ± 87.64ns`|`1.44μs`|`1.22μs - 1.44μs`|
|two object buckets|`524288`|`336.97ns ± 5.15ns`|`490.74ns`|`286.32ns - 788ns`|`336.97ns ± 94.81ns`|`1.62μs`|`1.26μs - 1.67μs`|
|map|`524288`|`1.55μs ± 6.2ns`|`1.8μs`|`1.45μs - 1.86μs`|`1.55μs ± 26.42ns`|`1.38μs`|`1.15μs - 1.41μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`33.9ns ± 674.02ps`|`66.26ns`|`25.72ns - 72.82ns`|`33.9ns ± 135.8ns`|`1.81μs`|`1.42μs - 1.89μs`|
|two object buckets|`524288`|`35.53ns ± 578.74ps`|`75.44ns`|`24.16ns - 78.94ns`|`35.53ns ± 127.86ns`|`1.64μs`|`1.35μs - 1.67μs`|
|linked list map|`524288`|`58.86ns ± 554.28ps`|`89.37ns`|`47.91ns - 95.57ns`|`58.86ns ± 128.21ns`|`1.7μs`|`1.37μs - 2.11μs`|
|map|`524288`|`112.56ns ± 562.8ps`|`127.69ns`|`79.71ns - 149.31ns`|`112.56ns ± 125.26ns`|`1.77μs`|`1.33μs - 2.22μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`49.43ns ± 1.25ns`|`84.99ns`|`39.49ns - 180.37ns`|`49.43ns ± 155.76ns`|`2.1μs`|`1.57μs - 2.24μs`|
|two object buckets|`524288`|`55.42ns ± 475.41ps`|`73.36ns`|`41.8ns - 91.26ns`|`55.42ns ± 136.93ns`|`1.82μs`|`1.38μs - 1.85μs`|
|linked list map|`524288`|`61.54ns ± 496.43ps`|`96.01ns`|`51.86ns - 99.9ns`|`61.54ns ± 156.39ns`|`2.08μs`|`1.64μs - 2.46μs`|
|map|`524288`|`109.23ns ± 526.2ps`|`129.6ns`|`100.11ns - 140.93ns`|`109.23ns ± 131.85ns`|`2.21μs`|`1.36μs - 2.24μs`|
# web apis
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`998.96ns ± 6.89ns`|`1.19μs`|`923.36ns - 2.27μs`|
|new Headers().append()|`1048576`|`1.01μs ± 9.36ns`|`1.17μs`|`922.94ns - 3.07μs`|
|new Headers().set()|`1048576`|`1.2μs ± 8.91ns`|`1.56μs`|`1.09μs - 2.52μs`|
|header pairs|`1048576`|`1.21μs ± 7.75ns`|`1.42μs`|`1.07μs - 2.44μs`|
|new Headers(record)|`1048576`|`1.42μs ± 11.3ns`|`1.61μs`|`1.26μs - 3.86μs`|
|new Headers(pairs)|`1048576`|`1.53μs ± 7.53ns`|`2.06μs`|`1.42μs - 2.76μs`|

