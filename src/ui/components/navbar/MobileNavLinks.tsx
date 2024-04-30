import { FC } from "react";
import { Flex, FlexProps, List, ListItem, Link } from "@chakra-ui/react";
import { routes } from "@/util/routes";
import { fonts } from "@/theme/Fonts";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const MobileNavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      <List display="flex" flexDirection="column" alignItems="flex-end">
        {routes.map((rout) => {
          return (
            <ListItem key={rout.title} mb={3}>
              <Link
                href={rout.url}
                isExternal={rout.isExternal}
                color="neutral.300"
                fontFamily={fonts.heading}
                fontWeight="600"
                _active={{ bg: "transparent" }}
                fontSize="button"
                onClick={onClose}
              >
                {rout.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};
