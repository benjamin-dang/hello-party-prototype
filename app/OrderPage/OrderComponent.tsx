import { Container, Typography } from "@mui/material";
import CallToActionBanner from "./Components/CallToActionBanner";
import CustomStepper from "./Components/CustomStepper";
import { SelectionPart, SelectionButton, SelectionButtonGrid } from "./Components/SelectionPart";
import { useState } from "react";

const EventOptions = [
    {
        label: 'Event 1',
        selected: false,
    },

    {
        label: 'Event 2',
        selected: false,
    },
    {
        label: 'Event 3',
        selected: false,
    },
    {
        label: 'Event 4',
        selected: false,
    },
    {
        label: 'Event 5',
        selected: false,
    },
    {
        label: 'Event 6',
        selected: false,
    },
    {
        label: 'Event 7',
        selected: false,
    },
    {
        label: 'Event 8',
        selected: false,
    },
    {
        label: 'Event 9',
        selected: false,
    },
    {
        label: 'Event 10',
        selected: false,
    },

]



const OrderComponent = () => {

    const [eventOptions, setEventOptions] = useState(EventOptions);

    const onOptionClick = (option) => {
        console.log('clicked: ', option.label);
        if (option.selected) {
            setEventOptions((prev) => prev.map((opt) => opt.label === option.label ? { ...opt, selected: false } : opt))
        }

        if(option.selected === false) {
            setEventOptions((prev) => prev.map((opt) => opt.label === option.label ? { ...opt, selected: true} : { ...opt, selected: false}))
        }
    }


    return (
        <>
            <SelectionPart sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 4 }}>
                <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                    Was für ein Event wird Veranstaltet?
                </Typography>
                <Typography variant="body2" fontSize={'16px'}>
                    Bitte wähle eine der folgenden Optionen aus, um fortzufahren.
                </Typography>
                <Container maxWidth={'md'}>
                    <SelectionButtonGrid>
                        {eventOptions.map((option, index) => (
                            <SelectionButton key={index} option={option} onClick={() => onOptionClick(option)} />
                        ))}
                    </SelectionButtonGrid>
                </Container>
            </SelectionPart>
            <Container sx={{ height: '70vh' }}>
                <p>Hier kannst du deine Bestellung aufgeben.</p>
                <p>Bitte fülle alle Felder aus, um fortzufahren.</p>
            </Container>
            <Container>

            </Container>
            <CallToActionBanner />
        </>
    )
}

export default OrderComponent;

