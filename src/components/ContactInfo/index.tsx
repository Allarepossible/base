import React from 'react';
import styled from 'styled-components';

import {Contact} from 'entities/contact';

interface Props {
    size: 'l' | 's';
}

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSpan = styled.span`
    font-size: ${({size}: Props) => size === 'l' ? '16px' : '12px'};
`;

const ContactInfo = ({
    name,
    phone,
}: Contact) => (
    <div>
        <ContactBox>
            <StyledSpan size="s">Имя: {name}</StyledSpan>
            <StyledSpan size="s">Тел.: {phone}</StyledSpan>
        </ContactBox>
    </div>
);

export default ContactInfo;
