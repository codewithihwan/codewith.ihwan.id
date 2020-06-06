---
layout: post
date: "2020-05-31"
title: "Perulangan pada Bahasa Pemrograman Swift"
tags: ['ios']
author: [ihwanid]
image: 'img/writing.jpg'
---
### For-In Loop

```swift
let names = ["Ihwan", "Devi", "Patrick", "Indah", "Gandy", "Edo"]
for name in names {
    print("Hello, \(name)!")
}
```

```swift
let numberOfAges = ["Ihwan": 17, "Mat Solar": 30, "Ucup Bensin": 25]
for (name, age) in numberOfAges {
    print("\(name) umur adalah \(age)")
}
```

```swift
for index in 1...5 {
    print("\(index) times 5 is \(index * 5)")
}
```

### While Loops

```swift
var index = 10

while index < 20 {
   print( "Value of index is \(index)")
   index = index + 1
}
```

### Repeat While Loops

```swift
var currentLevel:Int = 0, finalLevel:Int = 5
let gameCompleted = true
repeat {
    //play game
    if gameCompleted {
        print("You have passed level \(currentLevel)")
        currentLevel += 1
    }
} while (currentLevel <= finalLevel)
print("outside of repeat while loop")
```