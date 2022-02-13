import React from "react";

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps

} from 'react-native';


interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}



export function SkillCard({skill, ...rest } : SkillCardProps){
    return (
        <TouchableOpacity
        
        style={styles.buttonSkill}
           {...rest}
           
           >
           
            <Text style={styles.textSkill}>

            {skill}

            </Text>
          </TouchableOpacity>

    )
}

const styles = StyleSheet.create({


textSkill: {
    color: '#fff',


    fontSize: 18,
    fontWeight: 'bold',

  },


  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10


  }
})
