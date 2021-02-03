import React from 'react';
import { Button } from 'react-native';

export default function getLocation(props) {
    return (
        <Button title="Get Location" onPress={props.location} />
    );
}
