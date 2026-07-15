# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`396.87ps ± 14.77ps`|`329.35ps`|`293.46ps - 27.81ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`3.67ns ± 522.14ps`|`35.37ns`|`2.09ns - 43.66ns`|
|polymorphic array|`524288`|`7.66ns ± 913.28ps`|`38.26ns`|`2.59ns - 41.67ns`|
|monomorphic array|`524288`|`8.58ns ± 1.05ns`|`36.34ns`|`2.37ns - 40.16ns`|
|polymorphic object|`524288`|`15.72ns ± 1.25ns`|`40.01ns`|`3.59ns - 41.36ns`|
|megamorphic object|`524288`|`25.15ns ± 613.59ps`|`54.73ns`|`21.95ns - 61.44ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.74ns ± 640.02ps`|`31.54ns`|`2.33ns - 34.81ns`|
|monomorphic object|`524288`|`9.98ns ± 586.02ps`|`34.5ns`|`5.17ns - 39.81ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.46ns ± 177.67ps`|`21.71ns`|`7.52ns - 24.49ns`|
|prototype chain (override prototype)|`524288`|`11.87ns ± 240.54ps`|`26.66ns`|`9.94ns - 27.75ns`|
|prototype chain (create with prototype)|`524288`|`15.91ns ± 521.05ps`|`36.46ns`|`9.67ns - 45.81ns`|
|WeakMap store|`524288`|`22.59ns ± 512.58ps`|`37.2ns`|`13.22ns - 42.1ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`187.9ns ± 3.3ns`|`269.12ns`|`114.55ns - 269.9ns`|
|Object.create(null)|`524288`|`258.72ns ± 1.31ns`|`340.34ns`|`244.17ns - 350.74ns`|
|function constructor|`524288`|`979.56ns ± 11.45ns`|`1.69μs`|`919.11ns - 1.76μs`|
|object literal (computed properties)|`524288`|`1.04μs ± 5.31ns`|`1.16μs`|`954.53ns - 1.17μs`|
|function constructor (freezed proto)|`524288`|`1.08μs ± 6.18ns`|`1.27μs`|`995.14ns - 1.42μs`|
|object literal|`524288`|`1.1μs ± 4.95ns`|`1.22μs`|`1.01μs - 1.28μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`13.89ns ± 3.33ns`|`193.24ns`|`1.41ns - 224.74ns`|
|Object.create()|`524288`|`24.89ns ± 2.65ns`|`123.68ns`|`2.11ns - 133.58ns`|
|set prototype|`524288`|`25.59ns ± 2.02ns`|`78.7ns`|`3.01ns - 79.94ns`|
|function constructor|`524288`|`65.32ns ± 1.23ns`|`137.51ns`|`33.56ns - 141.4ns`|
|object spread|`524288`|`97.45ns ± 1.15ns`|`167.33ns`|`88.17ns - 176.9ns`|
|Object.setPrototypeOf()|`524288`|`225.26ns ± 2.52ns`|`277.41ns`|`208.65ns - 521.94ns`|
|set __proto__|`524288`|`399.77ns ± 10.12ns`|`661.4ns`|`274.73ns - 673.35ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`64.36ns ± 652.94ps`|`121.72ns`|`58.64ns - 127.47ns`|
|Set|`1048576`|`175.48ns ± 1.73ns`|`293.59ns`|`129.63ns - 296.98ns`|
|Set direct assign|`1048576`|`176.69ns ± 740.54ps`|`210.64ns`|`166.11ns - 309.35ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`80.79ns ± 1.01ns`|`129.08ns`|`49.1ns - 139.77ns`|
|Set|`1048576`|`104.04ns ± 688.74ps`|`148.93ns`|`95.13ns - 152.98ns`|
|Set direct assign|`1048576`|`118.01ns ± 306.23ps`|`137.57ns`|`111.56ns - 148.72ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`97.84ns ± 706.74ps`|`133.25ns`|`85.04ns - 149.59ns`|
|Set|`1048576`|`188.44ns ± 1.27ns`|`256.54ns`|`167.38ns - 320.35ns`|
|Set direct assign|`1048576`|`192.17ns ± 957.06ps`|`239.19ns`|`171.8ns - 327.46ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`106.01ns ± 653.54ps`|`154.49ns`|`80.76ns - 161.1ns`|
|Set direct assign|`1048576`|`120.57ns ± 364.49ps`|`145.76ns`|`113.42ns - 159.6ns`|
|Array.includes()|`1048576`|`159.47ns ± 1.88ns`|`290.79ns`|`134.69ns - 298.18ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`215.83ns ± 2.24ns`|`375.1ns`|`187.11ns - 383.46ns`|
|Set direct assign|`1048576`|`232.3ns ± 2.52ns`|`354.83ns`|`202.87ns - 396.41ns`|
|Array.includes()|`1048576`|`253.8ns ± 794.13ps`|`283.02ns`|`240.05ns - 397.11ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`112.73ns ± 387.51ps`|`137.57ns`|`104.7ns - 168.77ns`|
|Set direct assign|`1048576`|`125.97ns ± 662.33ps`|`194.4ns`|`105.87ns - 199.82ns`|
|Array.includes()|`1048576`|`262.27ns ± 1.96ns`|`420.15ns`|`240.22ns - 428.02ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`279.59ns ± 1.98ns`|`412.91ns`|`240.77ns - 521.8ns`|
|Set|`1048576`|`361.38ns ± 5.08ns`|`578.9ns`|`277.56ns - 622.62ns`|
|Array.includes()|`1048576`|`464.32ns ± 1.38ns`|`493.21ns`|`452.61ns - 794.81ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`138.84ns ± 658.43ps`|`172.17ns`|`130.01ns - 229ns`|
|Set|`1048576`|`177.17ns ± 618.24ps`|`203.55ns`|`151.27ns - 300.37ns`|
|Array.includes()|`1048576`|`468.6ns ± 2.42ns`|`650.45ns`|`452.8ns - 811.97ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`237.8ns ± 1.99ns`|`310.63ns`|`213.93ns - 322.38ns`|
|Set direct assign|`524288`|`255.71ns ± 4.15ns`|`473.25ns`|`219.77ns - 485.04ns`|
|Array.includes()|`524288`|`257.91ns ± 3.24ns`|`423.91ns`|`209.44ns - 495.67ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`158.86ns ± 1.71ns`|`242.89ns`|`144.66ns - 251.33ns`|
|Set direct assign|`524288`|`172.59ns ± 870.92ps`|`207.74ns`|`150.08ns - 215.47ns`|
|Array.includes()|`524288`|`259.02ns ± 2.89ns`|`408.29ns`|`241.8ns - 421.41ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`188.37ns ± 426.76ps`|`203.83ns`|`178.6ns - 211.82ns`|
|Set|`524288`|`260.53ns ± 1.99ns`|`340.52ns`|`238.28ns - 456.22ns`|
|Set direct assign|`524288`|`272.42ns ± 1.85ns`|`409.57ns`|`252.78ns - 419.56ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`166.19ns ± 2.01ns`|`270.2ns`|`148.06ns - 270.94ns`|
|Set direct assign|`524288`|`181.2ns ± 2.24ns`|`313.89ns`|`167.82ns - 324.69ns`|
|Array.includes()|`524288`|`640.16ns ± 11.49ns`|`825.45ns`|`522.17ns - 844.56ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`337.37ns ± 4.73ns`|`641.16ns`|`312.71ns - 655.4ns`|
|Set|`524288`|`395.78ns ± 5.72ns`|`606.86ns`|`354.68ns - 736.9ns`|
|Array.includes()|`524288`|`1.07μs ± 3.68ns`|`1.33μs`|`1.04μs - 1.34μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`192.43ns ± 462.87ps`|`211.16ns`|`171.63ns - 223.24ns`|
|Set|`524288`|`231.97ns ± 1.46ns`|`294.79ns`|`221.82ns - 395.61ns`|
|Array.includes()|`524288`|`1.08μs ± 6.88ns`|`1.35μs`|`1.04μs - 1.89μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`577.36ns ± 3.48ns`|`732.26ns`|`527.24ns - 820.94ns`|
|Set|`524288`|`612.24ns ± 5.88ns`|`813.92ns`|`550.72ns - 1.14μs`|
|Array.includes()|`524288`|`940.51ns ± 3.26ns`|`1.21μs`|`917.02ns - 1.22μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`301.93ns ± 3.45ns`|`539.89ns`|`283.72ns - 544.82ns`|
|Set|`524288`|`385.35ns ± 7.9ns`|`551.79ns`|`300.45ns - 552.66ns`|
|Array.includes()|`524288`|`939.7ns ± 2.61ns`|`988.18ns`|`921.92ns - 1.24μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`746.45ns ± 9.13ns`|`898.25ns`|`679.7ns - 898.25ns`|
|Set|`131072`|`775.19ns ± 26.36ns`|`1.38μs`|`677.8ns - 1.38μs`|
|Array.includes()|`131072`|`4.25μs ± 20.83ns`|`4.45μs`|`4.09μs - 4.45μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`591.43ns ± 19.79ns`|`1.07μs`|`529.7ns - 1.07μs`|
|Set|`131072`|`600.01ns ± 22ns`|`1.06μs`|`539.04ns - 1.06μs`|
|Array.includes()|`131072`|`4.27μs ± 25.71ns`|`4.67μs`|`4.07μs - 4.67μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`915.59ns ± 8.58ns`|`1.08μs`|`867.31ns - 1.08μs`|
|Set direct assign|`131072`|`1.02μs ± 11.57ns`|`1.22μs`|`925.75ns - 1.22μs`|
|Array.includes()|`131072`|`4.72μs ± 24.84ns`|`5.1μs`|`4.59μs - 5.1μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`678.22ns ± 22.29ns`|`1.21μs`|`622.43ns - 1.21μs`|
|Set direct assign|`131072`|`682.47ns ± 6.97ns`|`755.48ns`|`642.37ns - 755.48ns`|
|Array.includes()|`131072`|`4.73μs ± 21.66ns`|`4.9μs`|`4.6μs - 4.9μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.36μs ± 32.35ns`|`2.17μs`|`1.21μs - 2.17μs`|
|Set direct assign|`131072`|`1.41μs ± 11.71ns`|`1.62μs`|`1.31μs - 1.62μs`|
|Array.includes()|`131072`|`6.43μs ± 17.05ns`|`6.68μs`|`6.26μs - 6.68μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`805.31ns ± 26.67ns`|`1.54μs`|`754.42ns - 1.54μs`|
|Set direct assign|`131072`|`893.84ns ± 10.07ns`|`1.09μs`|`817.79ns - 1.09μs`|
|Array.includes()|`131072`|`6.46μs ± 22.46ns`|`6.88μs`|`6.37μs - 6.88μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.2μs ± 11.22ns`|`2.43μs`|`2.11μs - 2.43μs`|
|Set|`131072`|`2.24μs ± 17.55ns`|`2.48μs`|`2.1μs - 2.48μs`|
|Array.includes()|`131072`|`5.76μs ± 37.07ns`|`6.17μs`|`5.5μs - 6.17μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.13μs ± 33.19ns`|`2.17μs`|`1.06μs - 2.17μs`|
|Set direct assign|`131072`|`1.24μs ± 7.85ns`|`1.36μs`|`1.17μs - 1.36μs`|
|Array.includes()|`131072`|`19.58μs ± 387.4ns`|`31.76μs`|`18.92μs - 31.76μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`125.89ns ± 844.32ps`|`165.36ns`|`114.22ns - 171.74ns`|
|await non-promise|`524288`|`160.36ns ± 1.56ns`|`240.24ns`|`144.99ns - 241.83ns`|
|await promise|`524288`|`171.75ns ± 1.2ns`|`220.92ns`|`135.75ns - 235.92ns`|
|async generator|`524288`|`969.44ns ± 7.93ns`|`1.34μs`|`873.71ns - 1.48μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.38μs ± 31.09ns`|`1.69μs`|`892.9ns - 1.69μs`|
|generator|`131072`|`2.16μs ± 19.96ns`|`2.62μs`|`2.1μs - 2.62μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`187.7ns ± 2.14ns`|`261.53ns`|`158.94ns - 276.43ns`|`187.7ns ± 88.83ns`|`1.49μs`|`1.11μs - 1.75μs`|
|map|`524288`|`236.16ns ± 3.24ns`|`356.77ns`|`190.46ns - 363.37ns`|`236.16ns ± 84.38ns`|`1.5μs`|`1.1μs - 1.59μs`|
|linked list map|`524288`|`255.74ns ± 2.32ns`|`340.69ns`|`225.84ns - 378.14ns`|`255.74ns ± 82.05ns`|`1.35μs`|`1.09μs - 1.4μs`|
|two object buckets|`524288`|`314.08ns ± 3.63ns`|`488.89ns`|`270.18ns - 547.66ns`|`314.08ns ± 75.7ns`|`1.44μs`|`1.1μs - 1.47μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`26.02ns ± 461.06ps`|`39.97ns`|`18.43ns - 68.61ns`|`26.02ns ± 113.25ns`|`1.5μs`|`1.24μs - 1.5μs`|
|linked list map|`524288`|`26.5ns ± 450.36ps`|`44.43ns`|`19.94ns - 67.09ns`|`26.5ns ± 112.73ns`|`1.43μs`|`1.22μs - 1.44μs`|
|two map buckets|`524288`|`35.6ns ± 416.74ps`|`60.19ns`|`27.87ns - 66.98ns`|`35.6ns ± 104.78ns`|`1.38μs`|`1.15μs - 1.43μs`|
|two object buckets|`524288`|`49.92ns ± 547.94ps`|`85.9ns`|`41.42ns - 89.36ns`|`49.92ns ± 101.57ns`|`1.33μs`|`1.14μs - 1.37μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`67.65ns ± 287.49ps`|`74.9ns`|`61.36ns - 96.48ns`|`67.65ns ± 101.7ns`|`1.37μs`|`1.14μs - 1.4μs`|
|two object buckets|`524288`|`103.7ns ± 587.16ps`|`127.44ns`|`65.32ns - 129.06ns`|`103.7ns ± 95.91ns`|`1.32μs`|`1.12μs - 1.4μs`|
|map|`524288`|`118.27ns ± 940.88ps`|`145.16ns`|`93.59ns - 152.36ns`|`118.27ns ± 94.13ns`|`1.3μs`|`1.1μs - 1.31μs`|
|linked list map|`524288`|`146.12ns ± 1.01ns`|`189.27ns`|`131.59ns - 210.32ns`|`146.12ns ± 93.94ns`|`1.36μs`|`1.11μs - 1.4μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`189ns ± 2.46ns`|`271.18ns`|`135.97ns - 335.25ns`|`189ns ± 89.55ns`|`1.38μs`|`1.13μs - 1.53μs`|
|map|`524288`|`243.58ns ± 2.41ns`|`319.79ns`|`212.67ns - 321.29ns`|`243.58ns ± 83.47ns`|`1.41μs`|`1.11μs - 1.73μs`|
|linked list map|`524288`|`257.85ns ± 2.83ns`|`365.75ns`|`224.24ns - 436.72ns`|`257.85ns ± 83.32ns`|`1.38μs`|`1.12μs - 1.43μs`|
|two object buckets|`524288`|`314.73ns ± 5.34ns`|`531.41ns`|`260.92ns - 535.62ns`|`314.73ns ± 77.15ns`|`1.36μs`|`1.11μs - 1.53μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`27.39ns ± 416.57ps`|`45.31ns`|`21.86ns - 64.96ns`|`27.39ns ± 112.66ns`|`1.62μs`|`1.15μs - 1.65μs`|
|linked list map|`524288`|`27.8ns ± 413.61ps`|`44.83ns`|`23.62ns - 65.85ns`|`27.8ns ± 112.89ns`|`1.59μs`|`1.16μs - 1.66μs`|
|two map buckets|`524288`|`48.88ns ± 419.91ps`|`60.92ns`|`41.35ns - 85.6ns`|`48.88ns ± 103.53ns`|`1.38μs`|`1.15μs - 1.39μs`|
|two object buckets|`524288`|`56.25ns ± 438.48ps`|`71.28ns`|`39.51ns - 91.9ns`|`56.25ns ± 101.69ns`|`1.38μs`|`1.13μs - 1.47μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`69.94ns ± 349.08ps`|`86.49ns`|`66.69ns - 99.64ns`|`69.94ns ± 102.2ns`|`1.37μs`|`1.16μs - 1.38μs`|
|two object buckets|`524288`|`94.82ns ± 356.37ps`|`109.09ns`|`68.25ns - 110.87ns`|`94.82ns ± 97.09ns`|`1.35μs`|`1.12μs - 1.36μs`|
|map|`524288`|`125.89ns ± 510.13ps`|`148.67ns`|`118.87ns - 169.63ns`|`125.89ns ± 92.69ns`|`1.33μs`|`1.1μs - 1.44μs`|
|linked list map|`524288`|`133.65ns ± 857.84ps`|`166.85ns`|`125.29ns - 214.71ns`|`133.65ns ± 95.16ns`|`1.37μs`|`1.13μs - 1.39μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`182.45ns ± 1.51ns`|`277.81ns`|`139ns - 285.57ns`|`182.45ns ± 91.53ns`|`1.46μs`|`1.05μs - 1.77μs`|
|linked list map|`524288`|`256.15ns ± 1.42ns`|`305.34ns`|`233.34ns - 318.02ns`|`256.15ns ± 85.16ns`|`1.39μs`|`1.14μs - 1.43μs`|
|two object buckets|`524288`|`284.57ns ± 995.59ps`|`326.83ns`|`265.86ns - 330.7ns`|`284.57ns ± 81.5ns`|`1.38μs`|`1.13μs - 1.39μs`|
|map|`524288`|`427.39ns ± 5.61ns`|`649.82ns`|`379.25ns - 658.99ns`|`427.39ns ± 68.64ns`|`1.55μs`|`1.11μs - 1.66μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`32.82ns ± 425.11ps`|`48.8ns`|`29.71ns - 71.42ns`|`32.82ns ± 123.25ns`|`1.74μs`|`1.22μs - 1.86μs`|
|map|`524288`|`38.38ns ± 395.87ps`|`51.56ns`|`34.35ns - 79.28ns`|`38.38ns ± 116.59ns`|`1.53μs`|`1.23μs - 1.62μs`|
|two map buckets|`524288`|`59.16ns ± 440.24ps`|`76.81ns`|`45.66ns - 97.52ns`|`59.16ns ± 107.63ns`|`1.45μs`|`1.2μs - 1.45μs`|
|two object buckets|`524288`|`68.37ns ± 568.71ps`|`96.89ns`|`52.94ns - 108.75ns`|`68.37ns ± 105.06ns`|`1.39μs`|`1.19μs - 1.41μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`69.15ns ± 747.22ps`|`106.73ns`|`63.84ns - 132.37ns`|`69.15ns ± 110.98ns`|`1.68μs`|`1.22μs - 1.73μs`|
|two object buckets|`524288`|`91.81ns ± 464.03ps`|`106.83ns`|`57.34ns - 120.26ns`|`91.81ns ± 105.13ns`|`1.46μs`|`1.21μs - 1.5μs`|
|linked list map|`524288`|`137.37ns ± 460.76ps`|`149.35ns`|`131.27ns - 183.92ns`|`137.37ns ± 103.2ns`|`1.46μs`|`1.21μs - 1.55μs`|
|map|`524288`|`305.48ns ± 2.73ns`|`419.87ns`|`290.36ns - 425.33ns`|`305.48ns ± 86.59ns`|`1.52μs`|`1.19μs - 1.56μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`210.09ns ± 3.98ns`|`352.67ns`|`176.09ns - 474.36ns`|`210.09ns ± 112.81ns`|`1.68μs`|`1.4μs - 1.7μs`|
|linked list map|`524288`|`292.88ns ± 2.77ns`|`374.35ns`|`248.2ns - 374.86ns`|`292.88ns ± 95.97ns`|`1.61μs`|`1.29μs - 1.69μs`|
|two object buckets|`524288`|`359.04ns ± 5.57ns`|`658.86ns`|`290.03ns - 684.72ns`|`359.04ns ± 92.96ns`|`1.67μs`|`1.31μs - 1.82μs`|
|map|`524288`|`1.84μs ± 7.92ns`|`1.95μs`|`1.8μs - 2.77μs`|`1.84μs ± 41.95ns`|`1.66μs`|`1.27μs - 1.7μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`31.72ns ± 493.94ps`|`54.8ns`|`17.6ns - 76.91ns`|`31.72ns ± 148.59ns`|`1.95μs`|`1.58μs - 2μs`|
|two map buckets|`524288`|`32.27ns ± 428.27ps`|`43.89ns`|`27.02ns - 79.66ns`|`32.27ns ± 142.02ns`|`1.97μs`|`1.55μs - 2.12μs`|
|linked list map|`524288`|`52.68ns ± 483.75ps`|`68.83ns`|`48.33ns - 100.73ns`|`52.68ns ± 133.23ns`|`1.78μs`|`1.38μs - 1.79μs`|
|map|`524288`|`115.31ns ± 563.79ps`|`137.36ns`|`107.71ns - 162.85ns`|`115.31ns ± 133.26ns`|`1.84μs`|`1.52μs - 1.9μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`46.43ns ± 454.9ps`|`60.64ns`|`29.1ns - 85.9ns`|`46.43ns ± 158.66ns`|`2.4μs`|`1.64μs - 2.52μs`|
|two object buckets|`524288`|`53.29ns ± 524.92ps`|`66ns`|`26.37ns - 97.84ns`|`53.29ns ± 168.29ns`|`2.09μs`|`1.75μs - 2.11μs`|
|linked list map|`524288`|`59.71ns ± 391.01ps`|`70.47ns`|`54.37ns - 99.18ns`|`59.71ns ± 151.17ns`|`2.05μs`|`1.59μs - 2.09μs`|
|map|`524288`|`110.16ns ± 642ps`|`129.68ns`|`91.11ns - 165.02ns`|`110.16ns ± 167.35ns`|`2.28μs`|`1.73μs - 2.35μs`|

