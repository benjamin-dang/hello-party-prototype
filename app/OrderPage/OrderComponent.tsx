import { Button, Container, Typography } from "@mui/material";
import CallToActionBanner from "./Components/CallToActionBanner";
import CustomStepper from "./Components/CustomStepper";
import { SelectionPart, SelectionButton, SelectionButtonGrid } from "./Components/SelectionPart";
import { PersonSelection, PersonLeftColumn, PersonRightColumn, PersonSelectionRow, PersonSelectionButtonGrid } from "./Components/PersonSelection";
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

const PersonOptions = [
    {
        label: '1',
        selected: true,
    },
    {
        label: '2',
        selected: false,
    },
    {
        label: '3',
        selected: false,
    },
    {
        label: '4',
        selected: false,
    },
]

const LocationOptions = [
    {
        label: 'Drinnen',
        selected: false,
    },
    {
        label: 'Draußen',
        selected: false,
    },
    {
        label: 'Hybrid',
        selected: true,
    },

]


const OrderComponent = () => {

    const [eventOptions, setEventOptions] = useState(EventOptions);
    const [personOptions, setPersonOptions] = useState(PersonOptions)
    const [locationOptions, setLocationOptions] = useState(LocationOptions);

    const generalOnClick = (option, stateFunction) => {
        console.log('clicked: ', option.label);
        if (option.selected) {
            stateFunction((prev) => prev.map((opt) => opt.label === option.label ? { ...opt, selected: false } : opt))
        }

        if (option.selected === false) {
            stateFunction((prev) => prev.map((opt) => opt.label === option.label ? { ...opt, selected: true } : { ...opt, selected: false }))
        }
    }


    return (
        <>
            <SelectionPart sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Was für ein Event wird Veranstaltet?
                </Typography>
                <Typography variant="body2" fontSize={'16px'} mt={2}>
                    Bitte wähle <strong>eine</strong> der folgenden Optionen aus, um fortzufahren.
                </Typography>
                <Container maxWidth={'md'}>
                    <SelectionButtonGrid>
                        {eventOptions.map((option, index) => (
                            <SelectionButton key={index} option={option} onClick={{ handleClick: generalOnClick, stateFunction: setEventOptions }} />
                        ))}
                    </SelectionButtonGrid>
                </Container>
                <Typography variant="body2" fontSize={'16px'}>
                    Perfekt ausgerüstet für <strong>dein</strong> Event.
                </Typography>
            </SelectionPart>
            <PersonSelection sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Wie groß ist dein Event?
                </Typography>
                <Typography variant="body2" fontSize={'16px'} textAlign={'center'} my={2} gutterBottom>
                    Diese angabe ist wichtig, damit wir dir die richtige Box zusammenstellen können.
                </Typography>

                <PersonSelectionRow>
                    <PersonLeftColumn>
                        <Typography variant="body2" fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
                            Anzahl der Personen
                        </Typography>
                    </PersonLeftColumn>
                    <PersonRightColumn options={personOptions} onClick={{ handleClick: generalOnClick, stateFunction: setPersonOptions }} />
                </PersonSelectionRow>

                <PersonSelectionRow>
                    <PersonLeftColumn>
                        <Typography variant="body2" fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
                            Veranstaltungs Ort
                        </Typography>
                    </PersonLeftColumn>
                    <PersonRightColumn options={locationOptions} onClick={{ handleClick: generalOnClick, stateFunction: setLocationOptions }} />
                </PersonSelectionRow>

            </PersonSelection >
            <Container sx={{ height: '70vh' }}>
                <p>Hier kannst du deine Bestellung aufgeben.</p>
                <p>Bitte fülle alle Felder aus, um fortzufahren.</p>
            </Container>
            <CallToActionBanner />
        </>
    )
}

export default OrderComponent;

