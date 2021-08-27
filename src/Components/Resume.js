import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2010 - 2016'} 
                        title={' Voip Engineering'}
                        subTitle={'P&D comunicaciones'}
                        text={'leader of the voip service implementation department. voip is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line.             '} 
                    />
                    <ResumeItem 
                        year={'2016 - 2020'} 
                        title={'Freelancer'}
                        subTitle={'Network Administrator'}
                        text={'responsible for the day-to-day operation of these networks. They organize, install, and support an organization'+'s computer systems, including local area networks (LANs), wide area networks (WANs), network segments, intranets, and other data communication systems.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2021 - 2021'} 
                        title={'React.js'}
                        subTitle={'Learn from level 0 to master the React core.'}
                        text={'The most complete and updated React course You will learn from level zero to know and master the React core in depth with all the characteristics that are not touched in conventional courses. at the end of the course you will be able to create production quality components.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'JavaScript Algorithms and Data Structures'}
                        subTitle={'Free code Camp'}
                        text={'While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you will learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.'} 
                    />
                    <ResumeItem 
                        year={'2019 - 2019'} 
                        title={'The Ultimate Guide of Game Development 2019'}
                        subTitle={'Game developer'}
                        text={'This Unity course is the only one of its kind that is approved by Unity Technologies on Udemy. What better way to learn how to develop games in Unity than with their authorized course? The Ultimate Guide to Game Development with Unity introduces you to the Unity Engine and to the fundamentals of C# programming. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
        text-align: left;        
    }
`;
export default Resume
