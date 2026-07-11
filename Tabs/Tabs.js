import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          style={{ color: activeTab === index ? "blue" : "black" }}
        >
          {section.title}
        </button>
      ))}

      <p> {sections[activeTab].content} </p>
    </>
  );
}



/* 

READ THIS:::


The biggest difference is not the <>...</> vs <div>...</div>. The real difference is how you're using map().

Let's look at them carefully.

First Code
return (
  <>
    {sections.map((section, index) => {
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        style={{ color: activeTab === index ? "blue" : "black" }}
      >
        {section.title}
      </button>;
    })}

    <p>{sections[activeTab].content}</p>
  </>
);

Notice this part:

sections.map((section, index) => {

Here you're using curly braces {}.

When an arrow function uses {}, nothing is returned automatically.

So JavaScript sees this:

(section, index) => {
    <button>...</button>
}

which is equivalent to

(section, index) => {
    // create button
    // return nothing
}

So every iteration returns

undefined

The result of map() becomes

[undefined, undefined, undefined]

Therefore React renders

<>
  {nothing} 
  <p>...</p>
</>

No buttons appear.

To fix it

Return the button.

sections.map((section, index) => {
  return (
    <button
      key={index}
      onClick={() => setActiveTab(index)}
      style={{ color: activeTab === index ? "blue" : "black" }}
    >
      {section.title}
    </button>
  );
})

Now every iteration returns a button.

Second Code
tabs.map((tab, index) => (
  <button>
    {tab.title}
  </button>
))

Notice

(

instead of

{

This is called an implicit return.

JavaScript automatically returns the expression.

It is exactly equivalent to

tabs.map((tab, index) => {
  return (
    <button>
      {tab.title}
    </button>
  );
});

So this works.

Curly Braces vs Parentheses
Parentheses ()

Automatically returns the expression.

const nums = [1,2,3];

nums.map(num => (
  num * 2
));

Equivalent to

nums.map(num => {
  return num * 2;
});

Result

[2,4,6]
Curly Braces {}

You must write return.

nums.map(num => {
  return num * 2;
});

Also returns

[2,4,6]

Without return

nums.map(num => {
  num * 2;
});

Result

[undefined, undefined, undefined]
Another Example
Works
const names = ["Alice", "Bob"];

names.map(name => (
  <h1>{name}</h1>
));

React receives

[
  <h1>Alice</h1>,
  <h1>Bob</h1>
]
Doesn't Work
names.map(name => {
  <h1>{name}</h1>;
});

React receives

[
  undefined,
  undefined
]
Also Works
names.map(name => {
  return <h1>{name}</h1>;
});

React receives

[
  <h1>Alice</h1>,
  <h1>Bob</h1>
]

*/