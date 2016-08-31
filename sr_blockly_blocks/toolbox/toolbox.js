if (null == toolboxXmlText) {
    var toolboxXmlText = "";
}
toolboxXmlText += `
    <category id="shadow" name="Shadow Robot" colour="120">
    <category id="base" name="Base" colour="306">
      <block type="commander"></block>
      <block type="safe_planning"></block>
      <block type="compute_grasp"></block>
      <block type="grasp_object"></block>
      <block type="grasp_quality"></block>
      <block type="grasp_approach"></block>
      <block type="release_object"></block>
    </category>
    <category id="grasp" name="Grasp" colour="290">
    <block type="procedures_defreturn" id="Y|AiS.#@3DVZkk^dKSAe" collapsed="true" x="-558" y="-329">
        <mutation>
            <arg name="hand"></arg>
            <arg name="arm"></arg>
            <arg name="object"></arg>
        </mutation>
        <field name="NAME">Grasp Object</field>
        <comment pinned="false" h="80" w="160">Describe this function...</comment>
        <statement name="STACK">
            <block type="variables_set" id="D4[-AZA:fzlpyy7S5e+">
                <field name="VAR">grasp</field>
                <value name="VALUE">
                    <block type="compute_grasp" id="1-O}B}Og4;Dkm]-w#N!U">
                        <value name="NAME">
                            <block type="variables_get" id="6ZujW%HKe-];P9U3wB/r">
                                <field name="VAR">object</field>
                            </block>
                        </value>
                        <value name="NAME">
                            <block type="variables_get" id="5[hSf|lJvjOFE[E^e]Lf">
                                <field name="VAR">hand</field>
                            </block>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="variables_set" id="a@2D[TeoF0+s|sbQ:h^">
                        <field name="VAR">current_arm_pose</field>
                        <value name="VALUE">
                            <block type="get_current_pose" id="4:Us*/4%.;WTqP9y+hJ[">
                                <value name="commander">
                                    <block type="variables_get" id="=tTNz:a3!,Z9084i@o0y">
                                        <field name="VAR">arm</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="variables_set" id="Jn0l1V%9n#vJ4p(|zF?t">
                                <field name="VAR">current_hand_pose</field>
                                <value name="VALUE">
                                    <block type="get_current_pose" id="H.AkxexU2?H+3sLTfY!">
                                        <value name="commander">
                                            <block type="variables_get" id="+sfbQ-io9+Lu5L@gElx0">
                                                <field name="VAR">hand</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block type="variables_set" id="vzupE(VqQEBqO|lPLv/;">
                                        <field name="VAR">arm_start</field>
                                        <value name="VALUE">
                                            <block type="plan_traj" id="sVC_owuX^Sa_yJ7MNnP6">
                                                <field name="interpolation">1</field>
                                                <value name="commander">
                                                    <block type="variables_get" id="~(rWoi9HzLcAAF-mZd1J">
                                                        <field name="VAR">arm</field>
                                                    </block>
                                                </value>
                                                <value name="start">
                                                    <block type="variables_get" id="F{3H~JDg+l,K=B,yynH">
                                                        <field name="VAR">current_arm_pose</field>
                                                    </block>
                                                </value>
                                                <value name="goal">
                                                    <block type="grasp_approach" id="Td!{Iq4[.ulhi5#HtWfI">
                                                        <field name="grasp_phase">arm_pregrasp</field>
                                                        <value name="grasp">
                                                            <block type="variables_get" id="O4Fb/a){ZSo.rMyse-~e">
                                                                <field name="VAR">grasp</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="variables_set" id="FXo%E{[V4NZ;0fPI@38P">
                                                <field name="VAR">hand_pregrasp</field>
                                                <value name="VALUE">
                                                    <block type="plan_traj" id="enOS+8gI?l/8LI.)Aa;7">
                                                        <field name="interpolation">1</field>
                                                        <value name="commander">
                                                            <block type="variables_get" id="{/2GU;H)Wk5UuV}:4T84">
                                                                <field name="VAR">hand</field>
                                                            </block>
                                                        </value>
                                                        <value name="start">
                                                            <block type="variables_get" id="9D%:]j^YA}5/qJZwNe9t">
                                                                <field name="VAR">current_hand_pose</field>
                                                            </block>
                                                        </value>
                                                        <value name="goal">
                                                            <block type="grasp_approach" id="oDG^ptLMU;arA{M@K67D">
                                                                <field name="grasp_phase">hand_pregrasp</field>
                                                                <value name="grasp">
                                                                    <block type="variables_get" id="e8IW;#NH0.FX#{s,MpoA">
                                                                        <field name="VAR">grasp</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="variables_set" id="_Y=2*4T[{dYI|2v(kM]#">
                                                        <field name="VAR">arm_approach</field>
                                                        <value name="VALUE">
                                                            <block type="plan_traj" id="~1FY-;h.a)li@~Q_(7!I">
                                                                <field name="interpolation">1</field>
                                                                <value name="commander">
                                                                    <block type="variables_get" id="BY5WJMBVy3#]1Aa[GZ">
                                                                        <field name="VAR">arm</field>
                                                                    </block>
                                                                </value>
                                                                <value name="start">
                                                                    <block type="grasp_approach" id="JA{r*4i3F5tICM6-^i@a">
                                                                        <field name="grasp_phase">arm_pregrasp</field>
                                                                        <value name="grasp">
                                                                            <block type="variables_get" id="AJ.mk_W;_BhQHJR]02J!">
                                                                                <field name="VAR">grasp</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <value name="goal">
                                                                    <block type="grasp_approach" id="#JB,Ne.0th)u~:VyLUa+">
                                                                        <field name="grasp_phase">arm_grasp</field>
                                                                        <value name="grasp">
                                                                            <block type="variables_get" id="DEpa[52}o@kHjL}gK5gg">
                                                                                <field name="VAR">grasp</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="variables_set" id="3gMKkHq-n{dyvwCu.3:!">
                                                                <field name="VAR">arm_lift</field>
                                                                <value name="VALUE">
                                                                    <block type="plan_traj" id="h},_+(9cUV?4/#Lnq2Mn">
                                                                        <field name="interpolation">1</field>
                                                                        <value name="commander">
                                                                            <block type="variables_get" id="gq~uR5_%WYG]|Ye3CB?R">
                                                                                <field name="VAR">arm</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="start">
                                                                            <block type="grasp_approach" id="g?/{JdPJsa;{/E9r+sUs">
                                                                                <field name="grasp_phase">arm_grasp</field>
                                                                                <value name="grasp">
                                                                                    <block type="variables_get" id="FN-W15TJW^5QS~R81k@4">
                                                                                        <field name="VAR">grasp</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <value name="goal">
                                                                            <block type="grasp_approach" id="RgOLu[G3a40nK[N|tSk~">
                                                                                <field name="grasp_phase">arm_retreat</field>
                                                                                <value name="grasp">
                                                                                    <block type="variables_get" id="#6C=?ooZaS_*Pd3b^({w">
                                                                                        <field name="VAR">grasp</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="variables_set" id="Y^c%2-yLlaW:ER8kc%k;">
                                                                        <field name="VAR">approach_plan</field>
                                                                        <value name="VALUE">
                                                                            <block type="combine_traj" id="v?sec/IE(Mfd.VK-z?Hs">
                                                                                <field name="sync">TRUE</field>
                                                                                <value name="traj1">
                                                                                    <block type="variables_get" id="b{@#bjA4QDK-wKWqD2SZ">
                                                                                        <field name="VAR">arm_start</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="traj2">
                                                                                    <block type="variables_get" id="(fDz^4L0e^+ko()DI-%4">
                                                                                        <field name="VAR">hand_pregrasp</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="variables_set" id="j![Q(}5QGF1P5nCDe?A@">
                                                                                <field name="VAR">approach_plan</field>
                                                                                <value name="VALUE">
                                                                                    <block type="combine_traj" id=".U*iDd+7JifpFd6,)VAf">
                                                                                        <field name="sync">FALSE</field>
                                                                                        <value name="traj1">
                                                                                            <block type="variables_get" id="!YcDEO]S~vd=oeP}@YLr">
                                                                                                <field name="VAR">approach_plan</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="traj2">
                                                                                            <block type="variables_get" id="@q/w#H7ZA]jt^BX(pFoE">
                                                                                                <field name="VAR">arm_approach</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="play_traj" id="%_k[]6+{xQ3i!I=U!Xc,">
                                                                                        <value name="NAME">
                                                                                            <block type="variables_get" id="eNsUv9;VU(,toyt/Kk5L">
                                                                                                <field name="VAR">approach_plan</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="grasp_object" id="mXKDoR2,RXD/FBlqsF~">
                                                                                                <value name="NAME">
                                                                                                    <block type="variables_get" id="a9E{zx~Dt%~g]O=8o(qM">
                                                                                                        <field name="VAR">grasp</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="play_traj" id="Yq7Aiagit/og.[GFO1AT">
                                                                                                        <value name="NAME">
                                                                                                            <block type="variables_get" id="[dYzYZPfSr#U(N/5msc">
                                                                                                                <field name="VAR">arm_lift</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
        <value name="RETURN">
            <block type="grasp_quality" id="D}%L.o}YNZ%6+{+2Cz2i">
                <value name="hand">
                    <block type="variables_get" id=")c7i)xSM(j-DX;Kf25=I">
                        <field name="VAR">hand</field>
                    </block>
                </value>
            </block>
        </value>
    </block>
    <block type="procedures_defnoreturn" id="spW8]C+J|c*SlEGu)@I:" collapsed="true" x="-335" y="-312">
        <mutation>
            <arg name="hand"></arg>
            <arg name="arm"></arg>
            <arg name="object"></arg>
            <arg name="final_pose"></arg>
        </mutation>
        <field name="NAME">Place object</field>
        <comment pinned="false" h="80" w="160">Describe this function...</comment>
        <statement name="STACK">
            <block type="variables_set" id="W2r/l]x5Gu+r-:{.i+%d">
                <field name="VAR">grasp</field>
                <value name="VALUE">
                    <block type="compute_grasp" id="@^qhB?Cy:!lb)d_[jWH;">
                        <value name="NAME">
                            <block type="variables_get" id="U4?/RG?G!iEia%c/eLBf">
                                <field name="VAR">hand</field>
                            </block>
                        </value>
                        <value name="NAME">
                            <block type="variables_get" id="QxFJA;3|HfD7@r^DH)t">
                                <field name="VAR">object</field>
                            </block>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="variables_set" id="GlYsX1_ijASSI7syXm6d">
                        <field name="VAR">current_arm_pose</field>
                        <value name="VALUE">
                            <block type="get_current_pose" id="l6kl]cX-iEwW2i83j2,">
                                <value name="commander">
                                    <block type="variables_get" id="kt/x!zoJEiI]PVrCVr!">
                                        <field name="VAR">arm</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="variables_set" id="sl0r6ZUAHl5TM;M2-l5q">
                                <field name="VAR">current_hand_pose</field>
                                <value name="VALUE">
                                    <block type="get_current_pose" id="vZ/0md?nlxotx8x}_Wj)">
                                        <value name="commander">
                                            <block type="variables_get" id="-Ih%VO)(hT?ci@/iGO~T">
                                                <field name="VAR">hand</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block type="variables_set" id="[~lNz+}1-0Y?^DYRwJ{">
                                        <field name="VAR">arm_place</field>
                                        <value name="VALUE">
                                            <block type="plan_traj" id="/8.VoJ!%[wmdyVq+E?B!">
                                                <field name="interpolation">1</field>
                                                <value name="commander">
                                                    <block type="variables_get" id="DcNVQDWmvN+(Oh:%^Cl8">
                                                        <field name="VAR">arm</field>
                                                    </block>
                                                </value>
                                                <value name="start">
                                                    <block type="variables_get" id="vrMx=bAV^xw?]Vl!z#?o">
                                                        <field name="VAR">current_arm_pose</field>
                                                    </block>
                                                </value>
                                                <value name="goal">
                                                    <block type="variables_get" id="Q~o)*ZRpaP,!}wQai,hB">
                                                        <field name="VAR">final_pose</field>
                                                    </block>
                                                </value>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="variables_set" id="_cl@_k[[GPi=aKG(KY8p">
                                                <field name="VAR">hand_let_go</field>
                                                <value name="VALUE">
                                                    <block type="plan_traj" id="jY5M%aeC@}t^u/;jdpbh">
                                                        <field name="interpolation">1</field>
                                                        <value name="commander">
                                                            <block type="variables_get" id="!p.x{F[/?+lqOPn6wo4">
                                                                <field name="VAR">hand</field>
                                                            </block>
                                                        </value>
                                                        <value name="start">
                                                            <block type="variables_get" id="o18#R~jfR|qkg2DmrXi:">
                                                                <field name="VAR">current_hand_pose</field>
                                                            </block>
                                                        </value>
                                                        <value name="goal">
                                                            <block type="grasp_approach" id="4teN|6m)i%!l*Hq^9f=">
                                                                <field name="grasp_phase">hand_pregrasp</field>
                                                                <value name="grasp">
                                                                    <block type="variables_get" id="i0dS,JT_:+r{Jhq;TEwY">
                                                                        <field name="VAR">grasp</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="variables_set" id="8BCt8M}uz[YiWY[l6k/K">
                                                        <field name="VAR">arm_retreat</field>
                                                        <value name="VALUE">
                                                            <block type="plan_traj" id="@sJ2edU=s*n@MAlCI3Dh">
                                                                <field name="interpolation">1</field>
                                                                <value name="commander">
                                                                    <block type="variables_get" id="Dfnx@HM]Dtvu!3EO9|G%">
                                                                        <field name="VAR">arm</field>
                                                                    </block>
                                                                </value>
                                                                <value name="start">
                                                                    <block type="variables_get" id="JB;?BoDG0QMJ5F1,F3k+">
                                                                        <field name="VAR">current_hand_pose</field>
                                                                    </block>
                                                                </value>
                                                                <value name="goal">
                                                                    <block type="grasp_approach" id="e)/C,6x~3Q_,XX%%TkB">
                                                                        <field name="grasp_phase">arm_retreat</field>
                                                                        <value name="grasp">
                                                                            <block type="variables_get" id="Z{NdT#I5)o+ZWg*:j~O1">
                                                                                <field name="VAR">grasp</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="variables_set" id="_O9{[c!*SeoUOAUz,v:e">
                                                                <field name="VAR">plan</field>
                                                                <value name="VALUE">
                                                                    <block type="combine_traj" id="ElM+[Z0B^}%nb9y05+2G">
                                                                        <field name="sync">FALSE</field>
                                                                        <value name="traj1">
                                                                            <block type="variables_get" id=":H(KZ]U@Y0RXX|Hs16zL">
                                                                                <field name="VAR">arm_place</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="traj2">
                                                                            <block type="variables_get" id="0.59|Dm[~QX#^L#-9j9i">
                                                                                <field name="VAR">hand_let_go</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="variables_set" id="o^JY/_V~5J=T0LP23T.D">
                                                                        <field name="VAR">plan</field>
                                                                        <value name="VALUE">
                                                                            <block type="combine_traj" id="edOF}iNZyv*f)wN_cL3J">
                                                                                <field name="sync">FALSE</field>
                                                                                <value name="traj1">
                                                                                    <block type="variables_get" id="Tzz@RD.XBv46fS:zZkDl">
                                                                                        <field name="VAR">plan</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="traj2">
                                                                                    <block type="variables_get" id="cpl4yNSVn++1=I-kJ#a">
                                                                                        <field name="VAR">arm_retreat</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="play_traj" id="(*o5l0q[*nn8wEvcRzI|">
                                                                                <value name="NAME">
                                                                                    <block type="variables_get" id="byAtL*dmwu*u*P0j/5.%">
                                                                                        <field name="VAR">plan</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    </category>
    <category id="geometry" name="Geometry" colour="230">
      <block type="pose"></block>
      <block type="position"></block>
      <block type="orientation"></block>
      <block type="orientation_2"></block>
    </category>
    <category id="joints" name="Joints" colour="65">
      <block type="joints_pose"></block>
      <block type="get_current_pose"></block>
    </category>
    <category id="trajectory" name="Trajectory" colour="0">
      <block type="combine_traj"></block>
      <block type="plan_traj"></block>
      <block type="play_traj"></block>
    </category>
    <category id="vision" name="Vision" colour="140">
      <block type="find_objects"></block>
      <block type="add_object"></block>
      <block type="find_unknowns"></block>
      <block type="find_markers"></block>
    </category>
    </category>
;
`
