function hello(name) {
    if (name == null) {
      return "Hello, World!";
    }
  
    let str = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
  
    return str ? "Hello, " + str + "!" : "Hello, World!";
  };
  