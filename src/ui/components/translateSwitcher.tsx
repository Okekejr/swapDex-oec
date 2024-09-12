import {
  Button,
  Flex,
  FlexProps,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { fonts } from "@/theme/Fonts";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { ChevronUp } from "./icons/ChevronUp";
import { handleLangImgs } from "@/util";

export const TranslateSwitcher: FC<FlexProps> = ({ ...rest }) => {
  const lists = Object.values(supportedLangs);

  const [t, i18n] = useTranslation("global");

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Flex as="nav" alignItems="center" {...rest}>
        <Menu autoSelect={false}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                background="transparent"
                color="neutral.100"
                padding={0}
                height="1.7rem"
                rightIcon={
                  <ChevronUp
                    transition="all 175ms ease"
                    transform={isOpen ? "" : "scaleY(-1)"}
                  />
                }
                _hover={{ bg: "transparent" }}
                _active={{ bg: "none" }}
                _expanded={{ bg: "transparent" }}
              >
                <HStack>
                  <Text textTransform="uppercase">{i18n.language}</Text>
                  <Image
                    src={handleLangImgs(i18n.language)}
                    w={5}
                    h={4}
                    alt={i18n.language}
                  />
                </HStack>
              </MenuButton>

              <MenuList
                background="transparent"
                borderColor="primary.dark"
                backdropFilter="blur(16px)"
                borderRadius="12px"
                px="5px"
              >
                {lists.map((lang) => {
                  return (
                    <MenuItem
                      color="neutral.300"
                      background="transparent"
                      key={lang._lang}
                      fontFamily={fonts.heading}
                      fontWeight="600"
                      fontSize="1rem"
                      borderRadius="12px"
                      gap="12px"
                      mb="8px"
                      _hover={{ bg: "surface.secondary" }}
                      onClick={() => handleLangChange(lang._lang)}
                    >
                      <span style={{ textTransform: "uppercase" }}>
                        {lang._lang}
                      </span>

                      <Image src={lang._img} w={6} h={4} alt={lang._lang} />
                    </MenuItem>
                  );
                })}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </>
  );
};

interface langList {
  _lang: string;
  _img: string;
}

interface langT {
  [key: string]: langList;
}

const supportedLangs: langT = {
  english: {
    _img: "/assets/flags/usa.png",
    _lang: "en",
  },
  spanish: {
    _img: "/assets/flags/mexico.png",
    _lang: "es",
  },
  france: {
    _img: "/assets/flags/france.png",
    _lang: "fr",
  },
};
