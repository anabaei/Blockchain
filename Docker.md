## Docker

<details>
       <summary> Intro </summary>
       
  * Docker is a lightweight open secure platform to simplify running apps for shipping apps. 
  * It runs natively on Linux server. So if you are on Mac or windows requires VM to run. 
  * Images: have framework and codes as a blueprint to know what is inside. Which is a read only template. With Images you can use  isolated containers. 
  * Docker already built in Linux. Differece between Docker container and Virtual machine is as 
       ![here](https://user-images.githubusercontent.com/7471619/44635077-0d497680-a956-11e8-8a10-b941d3f85b0d.png)  Docker has a copy of every files reading the images to know which files in containers related each other. While VM has Guest OS here are not aware of each other's apps
   * Docker can setup development environments fast. Setting up env like database and different versions for each user usually takes time. So by creating an image and running we can have same env.Then the app which run on dev would run without any surprise on staging and production environments as well
   * Either `Docker Toolbox` for windows and `Docker Community Edition`for mac provide images and containrs tools and using Hyperkit which running on the VM
   * Tools inside Docker community edition is `Docekr Client`. Usually we never interact directly with VM. Another tool is `Docker Compose` to destroy containers that we dont need. Kitematic is a GUI tool which not use so much. 
   * `docker -compoe up` fire all containers 
   ### Install on Mac
   * `Docker CE for Mac (Edge)` and follow the instruction
   * 
</details>

<details>
       <summary> Using Tools </summary>
  
  ### Docker Machine
  * It is barely use but good to know
  * in `docker machine` to see the ip address we can type `docker-machine ls`to get the ip address of that
  * `docker-machine status defaulr` default is name of the docker vm 
  * If you use terminal window bash in VM then for each window you can hook it up to different vm. For example in new window you have
  
  ```linux
  docker ps  /// to list all containers give you error 
  docker-machine env default // needs to know which vm to hook  here is default
  eval "$(docker-machine env default)"
  docker ps  // now you containers 
  ```
  * docker-machine gives you list all commnads 
   
</details>
