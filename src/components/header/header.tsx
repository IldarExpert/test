import React from 'react';
import styled from 'styled-components';

const Fixed = styled.header`
position: fixed;

width: 100%;
text-align: center;
padding: 40px 0;
`

const Header = (): JSX.Element => {
    return (
        <Fixed>
            <svg width="174" height="49" viewBox="0 0 174 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.48 24.344C10.48 22.3387 10.6933 20.3973 11.12 18.52C11.5893 16.6427 12.3147 14.9787 13.296 13.528C14.2773 12.0347 15.5573 10.8613 17.136 10.008C18.7147 9.112 20.6347 8.664 22.896 8.664C25.1573 8.664 27.0773 9.112 28.656 10.008C30.2347 10.8613 31.5147 12.0347 32.496 13.528C33.4773 14.9787 34.1813 16.6427 34.608 18.52C35.0773 20.3973 35.312 22.3387 35.312 24.344C35.312 26.264 35.0773 28.1413 34.608 29.976C34.1813 31.768 33.4773 33.3893 32.496 34.84C31.5147 36.2907 30.2347 37.464 28.656 38.36C27.0773 39.2133 25.1573 39.64 22.896 39.64C20.6347 39.64 18.7147 39.2133 17.136 38.36C15.5573 37.464 14.2773 36.2907 13.296 34.84C12.3147 33.3893 11.5893 31.768 11.12 29.976C10.6933 28.1413 10.48 26.264 10.48 24.344ZM0.432 24.344C0.432 27.672 0.944 30.7867 1.968 33.688C2.992 36.5467 4.464 39.0427 6.384 41.176C8.304 43.3093 10.6507 44.9947 13.424 46.232C16.24 47.4267 19.3973 48.024 22.896 48.024C26.4373 48.024 29.5947 47.4267 32.368 46.232C35.1413 44.9947 37.488 43.3093 39.408 41.176C41.328 39.0427 42.8 36.5467 43.824 33.688C44.848 30.7867 45.36 27.672 45.36 24.344C45.36 20.9307 44.848 17.7733 43.824 14.872C42.8 11.928 41.328 9.368 39.408 7.192C37.488 5.016 35.1413 3.30933 32.368 2.072C29.5947 0.834666 26.4373 0.216 22.896 0.216C19.3973 0.216 16.24 0.834666 13.424 2.072C10.6507 3.30933 8.304 5.016 6.384 7.192C4.464 9.368 2.992 11.928 1.968 14.872C0.944 17.7733 0.432 20.9307 0.432 24.344ZM52.2285 1.304V47H61.6365V16.408H61.7645L80.7725 47H90.8205V1.304H81.4125V31.96H81.2845L62.2125 1.304H52.2285ZM99.666 1.304V47H131.986V38.552H109.714V1.304H99.666ZM142.319 29.208V47H152.367V29.464L169.327 1.304H158.127L147.503 19.352L136.815 1.304H125.55L142.319 29.208ZM163.715 37.144V47H173.763V37.144H163.715Z" fill="black"/>
            </svg>
        </Fixed>
    );
};

export default Header;