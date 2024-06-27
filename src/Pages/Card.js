import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from './AllSvgs';



const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: white;
color:black;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;
transition: all 0.2s ease;

&:hover{
background-color: black;
color:white;
border: 1px solid white;

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Montserrat',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid black;
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid white;
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: white;
    color: black;

}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:white;
    }
}

`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git  href={github}  target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
