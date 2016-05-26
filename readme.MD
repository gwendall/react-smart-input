React Smart Input
==========================

A smart input component for React.

Installation  
------------

``` sh
npm install react-smart-input
```

Details
-------

This package provides an enhanced INPUT component, offering ```onInputStart``` and ```onInputEnd``` events. ```onInputEnd``` is a throttled version of ```oninput```, for which you can define the timeout passing a ```ttl``` parameter. It is particularly useful if you want to make an operation (call an API for example) depending on your user's input, but don't want to call it on every input change (but wait for the user to finish typing instead).

Example
-------  

``` javascript
import React from 'react';
import { Input } from 'react-smart-input';

class MyInput extends React.Component {
  render() {
    return (
      <Input
        onInputStart={()=>console.log('Input started.')} onInputEnd={()=>console.log('Make API call.')}
        ttl={1000} />
    )
  }
}
```

That's it.

Components included
-------

Input: An enhanced Input component
