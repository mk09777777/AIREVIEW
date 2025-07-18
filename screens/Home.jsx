import React, { Fragment, useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Hammer from "components/Hammer";

export default function Home() {
    const [showTip1, setShowTip1] = useState(false);
    const [showTip2, setShowTip2] = useState(false);
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
            <Modal visible={modal}
                transparent={true}
                animationType="fade">
                <Hammer onDone={() => setModal(false)} />
            </Modal>
            <View className="flex flex-col bg-[#FFFFFF] flex-1 relative">
                <View className="flex flex-row justify-between p-4">
                    <Image
                        source={require("../assets/back.png")}
                        className="h-4.25 w-2.25 mt-12 ml-[35px]"
                    />
                    <View className="flex flex-col ml-[10px]">
                        <Text className="font-semibold text-[#000000] text-[16px] mt-12">
                            Master Service Agreement
                        </Text>
                        <Text className="font-normal text-[#00212C] text-[14px] mt-[5px]">
                            Master Service Agreement
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/download.png")}
                        className="w-[20px] h-[20px] ml-[3.67px] mr-[3.67px] mt-12"
                    />
                    <Image
                        source={require("../assets/share.png")}
                        className="w-[20px] h-[20px] ml-[3.67px] mr-[3.67px] mt-12"
                    />
                </View>

                <View className="flex flex-row mt-[5px] ml-[66px]">
                    <Image
                        source={require("../assets/jdmd.png")}
                        className="w-[56px] h-[34px] mr-[3.67px]"
                    />
                    <View className="flex justify-center items-center w-[108px] p-[5px] bg-[#FFF4D3] ml-[20px] rounded-[5px]">
                        <Text className="text-[#D09B02] font-semibold text-[12px]">Under Review</Text>
                    </View>
                </View>

                <View className="mt-[20px] border-b border-b-[0.8px] border-b-[#000000] w-full">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View className="flex flex-row">
                            <Text className="p-2 text-[14px] text-[#000000] font-semibold">Original</Text>
                            <View className="flex flex-row justify-center items-center ml-[10px]">
                                <Image source={require("../assets/autoSum.png")} className="h-[18px] w-[18px]" />
                                <Text className="p-2 text-[14px] text-[#000000] font-semibold">Auto Summary</Text>
                            </View>
                            <View className="border-b-2 border-b-[#000000] ml-[10px]">
                                <View className="flex flex-row justify-center items-center ml-[10px]">
                                    <Image source={require("../assets/Lexedit.png")} className="h-[18px] w-[18px]" />
                                    <Text className="p-2 text-[14px] text-[#000000] font-semibold">Lex Draft</Text>
                                </View>
                            </View>
                            <View className="flex flex-row justify-center items-center ml-[15px]">
                                <Image source={require("../assets/lexLaver.png")} className="h-[18px] w-[18px]" />
                                <Text className="p-2 text-[14px] text-[#000000] font-semibold">Lex Layers</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View className="p-[20px] mt-[10px] bg-[#F7F7F7] flex flex-col">
                    <View className="flex flex-row justify-between items-center p-[10px] bg-[#FFFFFF] border-[1px] border-[#D1D5DB] rounded-[5px]">
                        <Text className="font-semilbold text-[#6B6B6B] text-[14px]">Jurisdiction</Text>
                        <Image source={require("../assets/drop.png")} />
                    </View>
                    <View className="flex flex-row justify-between items-center p-[10px] bg-[#FFFFFF] border-[1px] border-[#D1D5DB] rounded-[5px] mt-[10px]">
                        <Text className="font-semilbold text-[#6B6B6B] text-[14px]">Drafting Style</Text>
                        <Image source={require("../assets/drop.png")} />
                    </View>
                </View>

                <View className="bg-[#FFFFFF] rounded-[8px] mb-[15px] flex-1">
                    <View className="flex flex-row justify-between items-center px-[20px] py-[10px]">
                        <Text className="font-semibold text-[16px] text-[#000000]">LeXi Draft</Text>
                        <View className="flex flex-row items-center ml-[30px]">
                            <Image source={require("../assets/undo.png")} className="mx-[5px]" />
                            <Image source={require("../assets/redo.png")} className="mx-[5px]" />
                            <TouchableOpacity onPress={() => navigation.navigate('full')}>
                                <Image source={require("../assets/zoom.png")} className="mx-[5px]" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-1">
                        <ScrollView className="px-[20px] pb-[80px]" showsVerticalScrollIndicator={true}>
                            <Text selectable className="font-normal text-[14px] text-[#000000]">
                                This Master Service Agreement (“Agreement”) is entered into and made effective as of May 15, 2025 (the “Effective Date”), by and between:
                                <Text className="text-[14px] text-[#000000] leading-[22px]">
                                    <Pressable onPress={() => setShowTip1(!showTip1)}>
                                        <Text className="bg-[#FFEBEB] underline decoration-red-500 decoration-[1px] underline-offset-2">
                                            ACME CORPORATION, a corporation organized under the laws of Delaware, with its principal place of business at 123 Main Street, Anycity, CA 94101 (“Client”);
                                        </Text>
                                    </Pressable>
                                    {"\n"}and{"\n"}
                                    <Pressable onPress={() => setShowTip2(!showTip2)}>
                                        <Text className="bg-[#FFEBEB] underline decoration-red-500 decoration-[1px] underline-offset-2">
                                            XYZ SERVICES, INC., a corporation organized under the laws of California, with its principal place of business at 456 Tech Drive, San Francisco, CA 94105 (“Service Provider”).
                                        </Text>
                                    </Pressable>
                                </Text>
                            </Text>

                            {showTip1 && (
                                <View className="absolute top-[10px] left-[10px] bg-black p-[6px] rounded-[4px] z-50">
                                    <Text className="text-white text-[12px]">Spelling issue or formatting suggestion</Text>
                                </View>
                            )}

                            {showTip2 && (
                                <View className="absolute top-[40px] left-[20px] bg-black p-[6px] rounded-[4px] z-50">
                                    <Text className="text-white text-[12px]">Consider key suggestions</Text>
                                </View>
                            )}

                            <View className="mt-[20px] bg-[#FFFFFF] border-[1px] border-[#E5E7EB] rounded-[5px] flex flex-col">
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

                                <View className="ml-[10px] mr-[10px] border-[#BBF7D0] border-[0.2px] rounded-[5px] mt-[9px] bg-[#EFFDF4] p-[6px]">
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
                            </View>
                        </ScrollView>

                        <View className="absolute bottom-[20px] left-[16px] right-[16px] bg-[#00212C] p-[15px] rounded-[12px] justify-center items-center flex flex-row z-50">
                            <Text className="text-[16px] font-semibold text-[#FFFFFF]">Regenrate</Text>
                            <Image
                                source={require("../assets/reg.png")}
                                className="ml-[8px] w-[20px] h-[20px]"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Fragment>
    );
}
