import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";



const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {

  const colors = {
  "blue": "#3182CE", 
  "cyan": "#00B5D8", 
  "gray": "#718096", 
  "green": "#38A169", 
  "orange": "#DD6B20", 
  "pink": "#D53F8C", 
  "purple": "#805AD5", 
  "red": "#E53E3E", 
  "teal": "#319795", 
  "yellow": "#D69E2E"};
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
  const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const SkillsSection = document.querySelector("#skills");
    SkillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    const EducationSection = document.querySelector("#Education");
    EducationSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];
  const GG = "GG"; 
  for (let i = 0; i < GG.length; i++) {
    const letter = GG[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }
  
  

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link onClick={scrollToHero}>
          <HStack>
            {TbLetterComponents.map((Component, index) => (
              <Component key={index} color={colors[color]} />
            ))}
          </HStack>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <div className="row">
              <>

                <Button variant="ghost" onClick={scrollToAbout}>
                  About
                </Button>
                <Button variant="ghost" onClick={scrollToSkills}>
                  Skills
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  Experience
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={scrollToEducation}>
                  Education
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
                <Button  as={Link}  href="https://drive.google.com/file/d/1rV3f3FpjyO2DoaJ6BKk8Ld5VFYdreSH9/view?usp=sharing" target="_blank" variant="outline" colorScheme="blue">
                  View Resume
                  </Button>
              </>
              </div>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        About
                      </Button>
                      <Button variant="ghost" onClick={scrollToSkills}>
                        Skills
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        Experience
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        Projects
                      </Button>
                      <Button variant="ghost" onClick={scrollToEducation}>
                        Education
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Contact
                      </Button>
                      <Button  as={Link}  href="https://drive.google.com/file/d/1Ub7OnkZCCeueq0iEjKnduJZtui1la_n6/view?usp=sharing" target="_blank" variant="outline" colorScheme="blue">
            View Resume
          </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
