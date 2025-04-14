import { Button, StyleSheet } from "react-native";
import colors from "@/src/components/theme/cores"

export const styles = StyleSheet.create({
   Button: {

   },
   HeaderTitle: {
      fontFamily: 'Poppins-Bold', fontSize: 20,
      color: colors.title
   },
   Title: {
      fontFamily: 'Poppins-Bold', fontSize: 24,
      color: colors.title
   },
   Text: {
      fontFamily: 'Poppins-Regular', fontSize: 16,
      color: colors.text
   },
   AlternativeText: {
      fontFamily: 'Poppins-Regular', fontSize: 16,
      color: colors.primary
   },
   NavText: {
      fontFamily: 'Poppins-Regular',
      color: colors.description
   }
})