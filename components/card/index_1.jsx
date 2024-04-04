import { View,Text,TouchableOpacity } from "react-native"
import {estile} from "./styles"

export default function Card({name}){
    return(

        <View > 
            <View style = {estile.container}>
            <Text style = {estile.textol}>
              {name}
            </Text>
            <TouchableOpacity style ={estile.excluir}>
                <Text style={estile.minimizar}>
                    -
                </Text>
            </TouchableOpacity>
            </View>
        </View>
       
    )
}