import { Button, StyleSheet } from "react-native";
import colors from "@/src/components/theme/cores"

export const styles = StyleSheet.create({
   Button: {
      height: 40, width: '100%',
      justifyContent: 'center', alignItems: 'center', 
      borderColor: colors.primary, borderRadius: 8, borderStyle: 'solid', borderWidth: 1
   },
   AlternativeButton: {
      height: 40, width: '100%',
      justifyContent: 'center', alignItems: 'center', 
      borderRadius: 8, backgroundColor: colors.primary
   },
   HeaderTitle: {
      fontFamily: 'Poppins-Bold', fontSize: 20,
      color: colors.title
   },
   Title: {
      fontFamily: 'Poppins-Bold', fontSize: 24,
      color: colors.title
   },
   BoldText: {
      fontFamily: 'Poppins-Bold', fontSize: 18,
      color: colors.title
   },
   SaldoPositivo: {
      fontFamily: 'Poppins-Bold', fontSize: 24,
      color: colors.positive
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