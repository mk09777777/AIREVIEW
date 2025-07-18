import React, { Fragment, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FullScreen() {
    const navigation = useNavigation();
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <Fragment>
            
            <View className="bg-[#FFFFFF] rounded-[8px] mb-[15px] flex-1 flex flex-col ">
                <View className="flex flex-row justify-between items-center px-[20px] py-[10px] mt-[64px]">
                    <View className="flex flex-row items-center ">
                        <TouchableOpacity onPress={() => navigation.navigate('review')}>
                            <Image
                                source={require("../assets/back.png")}
                            />
                        </TouchableOpacity>
                        <Text className="font-semibold text-[16px] text-[#000000] ml-[30px]">LeXi Draft</Text>
                    </View>
                    <View className="flex flex-row items-center ml-[30px]">
                        <Image
                            source={require("../assets/download.png")}
                            className="w-[20px] h-[20px] ml-[3.67px] mr-[3.67px] "
                        />
                        <Image
                            source={require("../assets/share.png")}
                            className="w-[20px] h-[20px] ml-[3.67px] mr-[3.67px]"
                        />

                    </View>

                </View>
                <ScrollView className="flex-1 p-[10px] ">
                    <View className="flex flex-col p-[20px]">
                        <Text selectable className="font-normal text-[14px] text-[#000000]">
                            This Master Service Agreement (“Agreement”) is entered into and made effective as of May 15, 2025 (the “Effective Date”), by and between:
                            ACME CORPORATION, a corporation organized under the laws of Delaware, with its principal place of business at 123 Main Street, Anycity, CA 94101 (“Client”);
                            and
                            XYZ SERVICES, INC., a corporation organized under the laws of California, with its principal place of business at 456 Tech Drive, San Francisco, CA 94105 (“Service Provider”).
                        </Text>
                        <Text className="font-semibold text-[14px] text-[#000000] mt-[10px]">1. DEFINITIONS</Text>
                        <Text selectable className="font-normal text-[14px] text-[#000000]">
                            1.1 “Services” refers to the professional services described in any Statement of Work (“SOW”) mutually executed by the parties under this Agreement.
                            1.2 “Deliverables” means any documents, work product, software, reports, or other materials delivered to the Client as a result of the Services.
                            1.3 “Intellectual Property Rights” includes all copyrights, patents, trademarks, trade secrets, moral rights, and any other proprietary rights recognized under applicable laws.
                        </Text>

                        <Text className="font-semibold text-[14px] text-[#000000] mt-[10px]">2. SCOPE OF SERVICES</Text>
                        <Text selectable className="font-normal text-[14px] text-[#000000]">
                            2.1 The Service Provider agrees to provide the Services and Deliverables as set forth in one or more SOWs. Each SOW will be incorporated into this Agreement by reference once signed by both parties.
                            2.2 The Service Provider shall perform all Services using personnel with appropriate skills, experience, and qualifications, in a professional and workmanlike manner, and in accordance with industry standards.
                            2.3 The Service Provider shall allocate sufficient resources to meet its obligations under each SOW.
                        </Text>
                    </View>
                    <View className="mt-[20px] bg-[#FFFFFF] border-[1px] border-[#E5E7EB] rounded-[5px] flex flex-col mb-[10px]">
                        <Text className="text-[15px] text-[#000000] font-semibold border-[0px] border-b-[0.19px] border-[#E5E7EB] p-[20px]">
                            Key Issues & Improvements
                        </Text>

                        <View className="px-[10px] pb-[10px] space-y-[6px] mt-[10px]">
                            <View className="flex-row items-start">
                                <Text className="text-[18px] text-[#000000] mr-[6px]">•</Text>
                                <Text className="flex-1 text-[15px] text-[#000000] leading-[22px]">
                                    Clear and standard, but missing mention of governing law in the intro.
                                </Text>
                            </View>

                            <View className="flex-row items-start">
                                <Text className="text-[18px] text-[#000000] mr-[6px]">•</Text>
                                <Text className="flex-1 text-[15px] text-[#000000] leading-[22px]">
                                    Lacks clarity on purpose (why is this agreement being made?).
                                </Text>
                            </View>
                        </View>

                        <View className="ml-[10px] mr-[10px] border-[#BBF7D0] border-[0.2px] rounded-[5px] mt-[9px] mb-[10px] bg-[#EFFDF4] p-[6px]">
                            <Text className="text-[15px] text-[#166434] font-semibold">
                                Suggested Improvements:
                            </Text>
                            <View className="flex-row items-start mt-[10px]">
                                <Text className="text-[18px] text-[#000000] mr-[6px]">•</Text>
                                <Text className="flex-1 text-[15px] text-[#000000] leading-[22px]">
                                    ACME CORPORATION, a Delaware corporation with a principal place of business at 123 Main Street, Anycity, CA 94101 (“Client”), and XYZ SERVICES, INC., a California corporation with a principal place of business at 456 Tech Drive, San Francisco, CA 94105 (“Service Provider”).
                                </Text>
                            </View>

                            <View className="flex-row items-start">
                                <Text className="text-[18px] text-[#000000] mr-[6px]">•</Text>
                                <Text className="flex-1 text-[15px] text-[#000000] leading-[22px]">
                                    The purpose of this Agreement is to define the terms under which the Service Provider will perform professional services for the Client.
                                </Text>
                            </View>
                        </View>
                        <View className="flex flex-row mt-[10px]  ml-[10px] mb-[10px] ">
                            <View className="bg-[#3C82F6] mr-[12px] rounded-[5px] justify-center items-center">
                                <Text className="text-[#FFFFFF] text-[13px] font-medium p-[10px]">
                                    Apply Changes
                                </Text>
                            </View>
                            <View className="bg-[#F3F4F6] mr-[12px] rounded-[5px] justify-center items-center">
                                <Text className="text-[#4B5563] text-[13px] font-medium p-[10px]">
                                    Dismiss
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Fragment>
    )
}