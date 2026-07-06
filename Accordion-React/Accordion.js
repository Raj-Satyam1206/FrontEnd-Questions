import { useState } from "react";
import "./styles.css";

const Accordion = () => {

    const [openIndex , setOpenIndex] = useState({});

    const toggle = (index) => {
        setOpenIndex((prev) => (
            {
            ...prev ,
            [index] : !prev[index]
            }
        ));
    };

    const sections = [
    {
      title: 'HTML',
      content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      title: 'CSS',
      content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      title: 'JavaScript',
      content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
    ];
    
    return(
        <>
            {sections.map((section , index) => {
                <div key={index}>
                    <div onClick = {() => toggle(index)}
                        style={{cursor:'pointer' , display:'flex' , justifyContent:'space-between' , alignItems: 'center'}}
                    >
                        {section.title}
                        <span
                            aria-hidden={true}
                            className={`accordion-icon ${openIndex[index] ? 'accordion-icon--rotated' : ''}`}
                        />
                    </div>

                    {openIndex[index] && (
                    <div>
                        {section.content}
                    </div>
                    )}
                    
                </div>
            })}
        </>
    );
}

export default Accordion;

/*
✅ The difference:
1. Using onClick={toggle(index)}

Here, toggle(index) is executed immediately when the component renders, not when the user clicks.

So your function would run on render and its return value (probably undefined) would be assigned to onClick.

Result: the click handler won’t work correctly because the function was already executed.

2. Using onClick={() => toggle(index)}

Here, you are passing an arrow function to onClick.

The arrow function wraps your toggle(index) call so that it only executes when the user actually clicks.

This ensures toggle(index) runs at the time of the event, not on render.
*/