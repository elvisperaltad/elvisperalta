import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Elvis Peralta</span></h4>
                <p className="paragraph">
                Young, with the desire to grow, establish and consolidate myself in a business.
                With the goal of improving myself in all aspects of myself life, giving the best 
                of me every day, both in the workplace as in the personal aspect.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name:</p>
                        <p>Nationality: </p>
                        <p>Languages: </p>
                        <p>Location:</p>
                        <p>Service:</p>
                    </div>
                    <div className="info">
                        <p> Elvis Peralta</p>
                        <p> Dominican </p>
                        <p> Spanish,English </p>
                        <p> Dominican Republic</p>
                        <p> Freelance</p>
                    </div>
                </div>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 80%;
        img{
            width: 75%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 2rem 0;
            margin-right: 2vh;
            text-align: justify;
            text-justify: inter-word;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
                        
