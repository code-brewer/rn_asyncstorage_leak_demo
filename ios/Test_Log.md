#  Memory cost test

## 测试1
1)  50.4M, 执行 init 操作==> 峰值51.9M, 最后值50.8M


2) getItem:  其中一个item的内容长度为 4304609 了
108M ==> 113M ==》 100  ==》 appendItem操作，升到 143M
==》 getItem操作 ===> 167M ==> 135M ==》 getItem操作: 184M ==> 143MB
==》 getItem操作: 184M ==> 128 MB ==》 getItem操作:  170M ==> 160M  (其中一个item长度： 8475983 )
 ==》 getItem操作:  210M ==> 144M  ==》 getItem操作:   2?0M ==> 176M
 ==》 getItem操作:   220M ==> 185M ==》 getItem操作:   225M ==> 217M ==> 193M
==> getItem操作:   236M ==> 225M  ==> getItem操作:   242M ==> 218M 
==> getItem操作:   266M ==> 250M ==> 226M  ==> getItem操作:   2676M ==> 234M  
==> getItem操作:   275M ==> 243M ==> getItem操作:   280M ==> 251M
 
 
 ## 测试2
 
