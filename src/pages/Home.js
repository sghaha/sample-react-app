import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Typography } from "@mui/material";

const Home = (props) => {
  const [open, setOpen] = React.useState([false, false, false, false]);

  const handleClick = (index) => () => {
    const newValues = [...open];
    newValues[index] = !open[index];
    setOpen(newValues);
  };

  const [pRvalues, setPRvalues] = useState([false, false, false, false]);
  const [pIvalues, setPIvalues] = useState([false, false, false, false]);
  const pRChange = (index) => (event) => {
    const newValues = [...pRvalues];
    newValues[index] = !newValues[index];
    setPRvalues(newValues);
  };
  const pIChange = (index) => (event) => {
    const newValues = [...pIvalues];
    newValues[index] = !newValues[index];
    setPIvalues(newValues);
  };

  return (
    <>
      <Stack
        direction="column"
        sx={{ width: "100%", margin: 0, padding: 0, maxWidth: 800 }}
      >
        <Typography
          variant="button"
          component="div"
          ml={2}
          mt={2}
          mb={1}
          sx={{ color: "#8C8C8C" }}
        >
          DumpList
        </Typography>
        <List sx={{ width: "100%" }}>
          <Divider sx={{ marginTop: 0 }} />
          {[
            {
              title:
                "Oracle Cloud Infrastructure Developer 2021 Associate (1Z0-1084-21)",
              provider: "Oracle",
              updateDate: "2022-02-14",
            },
            {
              title: "AWS Certified Developer Associate",
              provider: "Amazon",
              updateDate: "2022-03-21",
            },
            {
              title: "AWS Certified Solutions Architect - Associate SAA-C02",
              provider: "Amazon",
              updateDate: "2022-03-14",
            },
            {
              title: "AWS Certified Cloud Practitioner (CLF-C01)",
              provider: "Amazon",
              updateDate: "2022-03-21",
            },
          ].map((value, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={value.title} />
              </ListItem>
              <ListItem
                secondaryAction={
                  <>
                    <FormControlLabel
                      control={
                        <Switch
                          size="large"
                          checked={pRvalues[index]}
                          onClick={pRChange(index)}
                        />
                      }
                      label="문제섞기"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="large"
                          checked={pIvalues[index]}
                          onClick={pIChange(index)}
                        />
                      }
                      label="보기섞기"
                    />
                    <Button size="small" variant="contained">
                      문제풀기
                    </Button>
                  </>
                }
              >
                {open[index] ? (
                  <ExpandLess onClick={handleClick(index)} />
                ) : (
                  <ExpandMore onClick={handleClick(index)} />
                )}
              </ListItem>
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    alignItems="flex-start"
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <ListItemText>
                      <b>Certification Provider : </b>
                      {value.provider}
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    alignItems="flex-start"
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <ListItemText>
                      <b>Updated Date : </b>
                      {value.updateDate}
                    </ListItemText>
                  </ListItem>
                </List>
              </Collapse>
              <Divider sx={{ marginTop: 1 }} />
            </div>
          ))}
        </List>
      </Stack>
    </>
  );
};

export default Home;
